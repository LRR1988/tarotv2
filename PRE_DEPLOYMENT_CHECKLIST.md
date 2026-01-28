# ✅ Checklist Pre-Despliegue - Oráculo de Luz Rey

## 📝 Antes de Construir (npm run build)

### 1. Configuración de Supabase
- [ ] Verifica que `src/lib/supabaseClient.ts` tenga las credenciales correctas
- [ ] Confirma que `VITE_SUPABASE_URL` apunte a tu proyecto de producción
- [ ] Confirma que `VITE_SUPABASE_ANON_KEY` sea la clave correcta

### 2. URLs y Dominios
- [ ] Actualiza `index.html` - Reemplaza `https://tudominio.com` con tu dominio real
- [ ] Actualiza `public/robots.txt` - Cambia la URL del sitemap
- [ ] Actualiza `public/sitemap.xml` - Cambia todas las URLs

### 3. Contenido
- [ ] Revisa el email de contacto en `OracleCard.tsx` (actualmente: `hola@luzrey.com`)
- [ ] Actualiza el enlace de PayPal en `App.tsx` (línea 317)
- [ ] Verifica que todos los textos estén en español/inglés según necesites

### 4. Base de Datos (Supabase)
- [ ] Ejecuta `supabase_schema.sql` en SQL Editor
- [ ] Ejecuta `chat_setup.sql`
- [ ] Ejecuta `chat_security_policies.sql`
- [ ] Ejecuta todos los archivos `*_ingest.sql` para cargar las cartas
- [ ] Verifica que las 4 mazos tengan 30 cartas cada uno
- [ ] Comprueba que las imágenes estén subidas a Supabase Storage
- [ ] Configura los buckets de Storage como públicos

---

## 🔨 Construcción del Proyecto

Ejecuta en tu terminal:

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Construir para producción
npm run build
```

**Resultado esperado:**
- ✅ Carpeta `dist/` creada
- ✅ Sin errores de TypeScript
- ✅ Archivos optimizados y minificados

---

## 📤 Archivos a Subir a Hostinger

Sube **TODO** el contenido de la carpeta `dist/` a `public_html/`:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── robots.txt
├── sitemap.xml
└── .htaccess (crear manualmente o copiar de public/)
```

**IMPORTANTE:** No subas la carpeta `dist/` en sí, solo su **contenido**.

---

## 🔐 Seguridad Post-Despliegue

### En Hostinger:
- [ ] Verifica que `.htaccess` esté presente en `public_html/`
- [ ] Comprueba que los permisos de archivos sean 644
- [ ] Comprueba que los permisos de carpetas sean 755

### En Supabase:
- [ ] Activa Row Level Security (RLS) en todas las tablas
- [ ] Verifica que las políticas anti-spam estén activas
- [ ] Revisa los logs de autenticación

---

## 🧪 Pruebas Post-Despliegue

### Funcionalidad Básica:
- [ ] La página carga correctamente
- [ ] Se ven los 4 mazos (Naturaleza, Bestiario, Oficios, Emociones)
- [ ] Puedes seleccionar un mazo y revelar una carta
- [ ] La carta muestra imagen, interpretación, pregunta, acción y ritual
- [ ] El botón "Que el Destino elija por mí" funciona

### Sistema de 24 Horas:
- [ ] Después de sacar una carta, no puedes sacar otra
- [ ] Aparece el popup "El Oráculo Reposa" con tiempo restante
- [ ] El contador muestra horas y minutos correctamente

### Chat (Mandala):
- [ ] Puedes establecer un nombre de usuario
- [ ] Puedes enviar mensajes
- [ ] Los mensajes aparecen en tiempo real
- [ ] El rate limiting funciona (3 segundos entre mensajes)
- [ ] Los enlaces están bloqueados
- [ ] Los mensajes duplicados están bloqueados

### Idiomas:
- [ ] El botón ES/EN cambia el idioma
- [ ] Todos los textos se traducen correctamente
- [ ] La guía de usuario está en ambos idiomas
- [ ] El "Sobre mí" está en ambos idiomas

### Audio:
- [ ] El botón de sonido funciona
- [ ] Se escucha el ambiente de cuencos tibetanos
- [ ] El fade in/out es suave

### Responsive:
- [ ] Se ve bien en móvil (< 768px)
- [ ] Se ve bien en tablet (768-1024px)
- [ ] Se ve bien en desktop (> 1024px)
- [ ] La navegación es usable en todos los tamaños

### SEO:
- [ ] El título aparece en la pestaña del navegador
- [ ] `robots.txt` es accesible: `tudominio.com/robots.txt`
- [ ] `sitemap.xml` es accesible: `tudominio.com/sitemap.xml`

---

## 🚨 Errores Comunes y Soluciones

### Error: "Failed to fetch"
**Causa:** Credenciales de Supabase incorrectas
**Solución:** Revisa `supabaseClient.ts`

### Error: "404 Not Found" al navegar
**Causa:** Falta `.htaccess`
**Solución:** Sube el archivo `.htaccess` a `public_html/`

### Error: "Cannot read properties of undefined"
**Causa:** Falta ejecutar migraciones en Supabase
**Solución:** Ejecuta todos los archivos `.sql` en orden

### Error: Imágenes no cargan
**Causa:** Bucket de Storage no es público
**Solución:** En Supabase Storage, marca el bucket como público

---

## 📊 Monitoreo Post-Lanzamiento

### Primera Semana:
- [ ] Revisa logs de errores en Hostinger diariamente
- [ ] Monitorea uso de Supabase (Dashboard > Usage)
- [ ] Comprueba que no haya spam en el chat
- [ ] Verifica que las políticas RLS funcionen

### Mensual:
- [ ] Revisa analytics (si los implementas)
- [ ] Comprueba el espacio de almacenamiento en Hostinger
- [ ] Actualiza dependencias si hay vulnerabilidades

---

## 🎉 ¡Listo para Lanzar!

Una vez completado este checklist, tu Oráculo estará listo para ayudar a personas de todo el mundo en su camino de autoconocimiento.

**¡Mucha suerte con el lanzamiento!** 🔮✨
