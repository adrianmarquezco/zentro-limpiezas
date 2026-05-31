import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Honeypot: si hay contenido en _honeypot, es spam
  const formData = await request.formData();
  const honeypot = formData.get('_honeypot')?.toString() ?? '';
  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const nombre = formData.get('nombre')?.toString().trim() ?? '';
  const telefono = formData.get('telefono')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const servicio = formData.get('servicio')?.toString().trim() ?? '';
  const zona = formData.get('zona')?.toString().trim() ?? '';
  const mensaje = formData.get('mensaje')?.toString().trim() ?? '';

  if (!nombre || !telefono || !servicio || !zona) {
    return new Response(JSON.stringify({ error: 'Campos requeridos incompletos' }), { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const emailTo = import.meta.env.EMAIL_TO ?? process.env.EMAIL_TO;
  const emailFrom = import.meta.env.EMAIL_FROM ?? process.env.EMAIL_FROM ?? 'noreply@zentrolimpiezas.es';

  if (!resendApiKey || !emailTo) {
    console.error('Faltan variables de entorno: RESEND_API_KEY y/o EMAIL_TO');
    return new Response(JSON.stringify({ error: 'Configuración de servidor incompleta' }), { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #0A2540; margin-bottom: 16px;">Nueva solicitud de presupuesto — Zentro Limpiezas</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #eee; width: 140px;">Nombre</td><td style="padding: 8px 0; font-size: 14px; border-bottom: 1px solid #eee;">${nombre}</td></tr>
        <tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #eee;">Teléfono</td><td style="padding: 8px 0; font-size: 14px; border-bottom: 1px solid #eee;"><a href="tel:${telefono.replace(/\s/g, '')}">${telefono}</a></td></tr>
        ${email ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px 0; font-size: 14px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>` : ''}
        <tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #eee;">Servicio</td><td style="padding: 8px 0; font-size: 14px; border-bottom: 1px solid #eee;">${servicio}</td></tr>
        <tr><td style="padding: 8px 0; color: #666; font-size: 14px; border-bottom: 1px solid #eee;">Zona</td><td style="padding: 8px 0; font-size: 14px; border-bottom: 1px solid #eee;">${zona}</td></tr>
        ${mensaje ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px; vertical-align: top;">Mensaje</td><td style="padding: 8px 0; font-size: 14px;">${mensaje.replace(/\n/g, '<br>')}</td></tr>` : ''}
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #999;">Enviado desde zentrolimpiezas.es · ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: emailFrom,
    to: emailTo,
    subject: `Nuevo presupuesto: ${servicio} en ${zona} — ${nombre}`,
    html,
    replyTo: email || undefined,
  });

  if (error) {
    console.error('Error Resend:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
