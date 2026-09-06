# FRD - StudyBuddy (Actualizado)

## Objetivo
Definir con precisión las funcionalidades, pantallas e integraciones del producto StudyBuddy para reflejar fielmente la implementación actual.

---

## Estado de implementación
- **Visualización de grupos**: Permite ver los grupos de estudio disponibles.
- **Inscripción a grupos**: Flujo de selección, resumen, confirmación y almacenamiento en Supabase.
- **Solicitar compañero de estudio**: Flujo completo de solicitud.
- **Solicitar ayuda académica**: Flujo completo de solicitud.
- **Chatbot**: Asistente integrado que utiliza la API de Gemini (backend).
- **Despliegue**: https://studyboddy.vercel.app/

---

## Funcionalidades principales

### Gestión de Grupos e Inscripciones
1. **Visualización**: El usuario puede visualizar grupos de estudio disponibles.
2. **Selección**: El estudiante elige un grupo desde las opciones disponibles.
3. **Registro**: Al seleccionar "Unirme", proporciona su nombre y correo.
4. **Confirmación**: Antes de enviar la inscripción, se muestra un resumen (grupo, nombre, correo) que el estudiante debe confirmar.
5. **Transacción**: Tras la confirmación, la inscripción se envía a través de la función serverless `/api/register_group`.
6. **Persistencia**: Los datos se almacenan en la tabla `group_registrations` de Supabase.
7. **Seguimiento**: Cada inscripción genera un folio único (SB-XXXXXX) con un estado asociado.

### Solicitar compañero de estudio
1. **Flujo**: Disponible en `solicitar_companero.html`.
2. **Entradas**: Curso, modalidad y horario.
3. **Transacción**: Se procesa mediante `/api/request_study_partner.mjs`.
4. **Persistencia**: Los datos se almacenan en la tabla `public.study_partner_requests`.
5. **Seguimiento**: Se genera un folio `SB-P-XXXXXX` con estado inicial `pending`. La respuesta de la API devuelve directamente el folio y status.

### Solicitar ayuda académica
1. **Flujo**: Disponible en `solicitar_ayuda.html`.
2. **Entradas**: Curso, tipo de ayuda y modalidad.
3. **Transacción**: Se procesa mediante `/api/request_academic_help.mjs`.
4. **Persistencia**: Los datos se almacenan en la tabla `public.academic_help_requests`.
5. **Seguimiento**: Se genera un folio `SB-H-XXXXXX` con estado inicial `pending`. La respuesta de la API devuelve directamente el folio y status.

### Chatbot integrado
1. **Acceso**: El chatbot es accesible desde la interfaz del producto.
2. **Backend**: Se comunica mediante `/api/chatbot`, integrando Gemini en el servidor.
3. **Seguridad**: Las claves de API (Gemini, Supabase) se gestionan exclusivamente como variables de entorno del servidor, sin exponerse en el navegador.
4. **Contexto**: El chatbot está restringido a responder sobre información relacionada con StudyBuddy y utiliza los datos del proyecto como contexto.

---

## Reglas funcionales generales
1. StudyBuddy utiliza Bootstrap 5 para el diseño.
2. Todas las transacciones de datos se realizan mediante funciones serverless (Node.js/ES Modules).
3. Las credenciales (Supabase, Gemini) permanecen seguras del lado del servidor.
4. El despliegue de la aplicación se gestiona a través de Vercel.

