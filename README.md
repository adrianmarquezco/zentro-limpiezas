# Zentro Limpiezas

Web corporativa y de captación SEO para Zentro Limpiezas, empresa de limpiezas profesionales en Ferrolterra y A Coruña.

## Stack

| | |
|---|---|
| **Framework** | Astro 5 |
| **Estilos** | Tailwind CSS |
| **Lenguaje** | TypeScript |
| **Despliegue** | Coolify (auto-deploy en push a `main`) |
| **Servidor** | VPS Hostinger — París (IP 187.124.223.241) |
| **Dominio** | zentrolimpiezas.es |
| **SSL** | Let's Encrypt vía Traefik (Coolify) |
| **Repo** | github.com/adrianmarquezco/zentro-limpiezas |

## Estructura

```
src/
├── data/
│   ├── municipios.ts     # Todos los municipios, barrios, FAQs y contenido
│   ├── servicios.ts      # Catálogo de servicios con slugs ES y GL
│   └── config.ts         # Datos del negocio, precios, WhatsApp
├── pages/
│   ├── zonas/            # Páginas por municipio y barrio (ES)
│   ├── servicios/        # Páginas por servicio + combos servicio×municipio
│   ├── gl/               # Versión gallega de todo el sitio
│   └── sitemap.xml.ts    # Sitemap generado dinámicamente
└── layouts/
    └── ZoneLayout.astro  # Layout con FAQ schema, hreflang, breadcrumbs
```

## Idiomas

Sitio bilingüe español / gallego. Todas las páginas en `/` tienen su equivalente en `/gl/`. Hreflang configurado en cada página.

## Despliegue

```
editar en local → git push → Coolify despliega automáticamente
```

No hay build en local. No instalar `node_modules` en local.

## Contenido

Todo el contenido (municipios, barrios, servicios, precios, FAQs) está en `src/data/`. Para añadir un municipio o barrio nuevo, editar ese archivo y el sitemap se actualiza solo.
