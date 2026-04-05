# Configurar captación de leads con Google Sheets + Apps Script

## 1) Crear hoja
- Crea una Google Sheet nueva.
- Nómbrala como quieras.
- No hace falta crear la pestaña `Leads`; el script la crea si no existe.

## 2) Crear Apps Script
- En la Sheet: `Extensiones -> Apps Script`.
- Borra el contenido inicial.
- Pega el contenido de `google-apps-script-leads.js`.
- Guarda el proyecto.

## 3) Desplegar como Web App
- `Implementar -> Nueva implementación`.
- Tipo: `Aplicación web`.
- Ejecutar como: `Tú`.
- Quién tiene acceso: `Cualquiera`.
- Implementa y copia la URL `/exec`.

## 4) Conectar la web
- Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`.
- Añade:

```bash
PUBLIC_LEAD_FORM_ENDPOINT=https://script.google.com/macros/s/TU_ID/exec
```

## 5) Reiniciar / rebuild
- Ejecuta `npm run build` o vuelve a desplegar la web.

## Campos que ya enviará la web
- `formType`
- `sourcePage`
- `name`
- `email`
- `company`
- `phone`
- `message`
- `privacyAccepted`
- `marketingAccepted`

## Nota legal
- El checkbox de privacidad es obligatorio.
- El checkbox de comunicaciones futuras es opcional.
- El email de referencia actual es `info@madecem.com`.
