# MADECEM Web

Sitio corporativo de MADECEM construido con Astro.

## Estado actual
- Páginas principales de marca ya preparadas
- Formularios conectados a Google Apps Script mediante `PUBLIC_LEAD_FORM_ENDPOINT`
- Sitemap y robots incluidos
- Leads almacenados en Google Sheets y aviso por email a `mcarpi83@gmail.com`

## Comandos
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Variables de entorno
Crea un archivo `.env` con:

```bash
PUBLIC_LEAD_FORM_ENDPOINT=URL_DEL_WEB_APP_DE_GOOGLE_APPS_SCRIPT
```

## Flujo de captación
- Los formularios envían datos al endpoint de Google Apps Script
- El script guarda cada lead en la hoja `Leads`
- Además envía un aviso por correo a `mcarpi83@gmail.com`

## Archivos útiles
- `src/components/LeadForm.astro` → formulario reutilizable
- `google-apps-script-leads.js` → script de Google Apps Script
- `LEADS-SETUP.md` → guía rápida de configuración
