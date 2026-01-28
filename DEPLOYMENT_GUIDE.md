# Guía de Despliegue en Hostinger - Oráculo de Luz Rey

## 📋 Requisitos Previos

1. Cuenta de Hostinger activa
2. Proyecto de Supabase configurado
3. Node.js instalado localmente (para build)

---

## 🚀 Paso 1: Construir el Proyecto para Producción

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm run build
```

Esto creará una carpeta `dist/` con todos los archivos optimizados para producción.

---

## 🔧 Paso 2: Configurar Variables de Entorno en Hostinger

Antes de subir, asegúrate de tener tus credenciales de Supabase:

1. Ve a tu proyecto en Supabase
2. Copia:
   - **VITE_SUPABASE_URL**: `Settings > API > Project URL`
   - **VITE_SUPABASE_ANON_KEY**: `Settings > API > anon/public key`

---

## 📤 Paso 3: Subir Archivos a Hostinger

### Opción A: Via File Manager (Recomendado para principiantes)

1. Inicia sesión en **hPanel de Hostinger**
2. Ve a **Archivos > Administrador de archivos**
3. Navega a `public_html/` (o la carpeta de tu dominio)
4. **Elimina** todos los archivos existentes (index.html, etc.)
5. Sube **TODO el contenido** de la carpeta `dist/`:
   - Selecciona todos los archivos dentro de `dist/`
   - Arrastra y suelta en el File Manager
   - Espera a que termine la carga

### Opción B: Via FTP (Más rápido)

1. Descarga **FileZilla** (cliente FTP gratuito)
2. Conéctate con las credenciales FTP de Hostinger:
   - Host: `ftp.tudominio.com`
   - Usuario: (proporcionado por Hostinger)
   - Contraseña: (proporcionado por Hostinger)
   - Puerto: 21
3. Navega a `public_html/`
4. Sube todo el contenido de `dist/`

---

## 🗄️ Paso 4: Configurar Supabase (Base de Datos)

### 4.1 Ejecutar Migraciones

En el **SQL Editor** de Supabase, ejecuta estos archivos en orden:

1. **supabase_schema.sql** (estructura de tablas)
2. **chat_setup.sql** (configuración del chat)
3. **chat_security_policies.sql** (políticas anti-spam)

### 4.2 Insertar Datos de Cartas

Ejecuta los archivos de ingesta de datos:

1. **nature_rio_ingest.sql**
2. **nature_batch_2_ingest.sql**
3. **nature_batch_3_ingest.sql**
4. **nature_batch_4_ingest.sql**
5. **nature_final_ingest.sql**
6. **monsters_ingest.sql**
7. **trades_ingest.sql**
8. **emotions_ingest.sql**

---

## 🔐 Paso 5: Configurar .htaccess (SPA Routing)

Crea un archivo `.htaccess` en `public_html/` con este contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache de archivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/woff2 "access plus 1 year"
</IfModule>
```

---

## ✅ Paso 6: Verificación Post-Despliegue

1. **Visita tu dominio**: `https://tudominio.com`
2. **Prueba estas funciones**:
   - ✅ Seleccionar un mazo
   - ✅ Revelar una carta
   - ✅ Cambiar idioma (ES/EN)
   - ✅ Abrir chat y enviar mensaje
   - ✅ Probar el límite de 24 horas
   - ✅ Activar/desactivar sonido ambiental

3. **Verifica en móvil**:
   - Abre desde tu teléfono
   - Comprueba que se vea correctamente

---

## 🔄 Actualizaciones Futuras

Cuando hagas cambios:

1. Ejecuta `npm run build` localmente
2. Sube **solo** los archivos modificados de `dist/`
3. Si cambias la base de datos, ejecuta las nuevas migraciones en Supabase

---

## 🆘 Solución de Problemas

### Problema: "Página en blanco"
- **Solución**: Verifica que `.htaccess` esté presente
- Revisa la consola del navegador (F12) para errores

### Problema: "No se conecta a Supabase"
- **Solución**: Verifica que las variables de entorno estén en `src/lib/supabaseClient.ts`
- Comprueba que las credenciales sean correctas

### Problema: "Chat no funciona"
- **Solución**: Ejecuta `chat_security_policies.sql` en Supabase
- Verifica que la tabla `messages` exista

### Problema: "Imágenes no cargan"
- **Solución**: Verifica que las URLs de Supabase Storage sean públicas
- Comprueba los permisos de las carpetas en Storage

---

## 📞 Contacto

Si tienes problemas, revisa:
- Logs de Hostinger (hPanel > Archivos > Logs de errores)
- Consola del navegador (F12 > Console)
- Logs de Supabase (Dashboard > Logs)

---

¡Tu Oráculo está listo para brillar en internet! ✨🔮
