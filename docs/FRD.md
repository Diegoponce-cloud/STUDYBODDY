# FRD - StudyBuddy (Entrega D4)

## Objetivo
Definir con precisión las funcionalidades, pantallas e integraciones del producto StudyBuddy (Entrega D4) para reflejar fielmente la implementación actual.

---

## Estado de implementación D4
- **Visualización de grupos**: Permite ver los grupos de estudio disponibles.
- **Inscripción a grupos**: Flujo de selección, resumen, confirmación y almacenamiento en Supabase.
- **Consulta de inscripciones**: Seguimiento mediante folio único y estado.
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
7. **Seguimiento**: Cada inscripción genera un folio único con un estado asociado, permitiendo al estudiante consultar su inscripción posteriormente.

### Chatbot integrado
1. **Acceso**: El chatbot es accesible desde la interfaz del producto.
2. **Backend**: Se comunica mediante `/api/chatbot`, integrando Gemini en el servidor.
3. **Seguridad**: La clave `GEMINI_API_KEY` se gestiona exclusivamente como variable de entorno del servidor, sin exponerse en el navegador.
4. **Contexto**: El chatbot está restringido a responder sobre información relacionada con StudyBuddy y utiliza los datos del proyecto como contexto.

---

## Reglas funcionales generales
1. StudyBuddy utiliza Bootstrap 5 para el diseño.
2. Las transacciones de datos se realizan mediante funciones serverless.
3. El despliegue de la aplicación se gestiona a través de Vercel.

