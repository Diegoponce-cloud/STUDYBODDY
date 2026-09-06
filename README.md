# StudyBuddy

StudyBuddy es una plataforma que ayuda a estudiantes a encontrar compañeros de estudio y grupos compatibles según universidad, carrera, cursos, horarios y modalidad.

## MVP

### Tres Must principales
1. **Registro:** permitir que un estudiante cree una cuenta y complete la información inicial.
2. **Perfil:** permitir que el estudiante gestione universidad, carrera, cursos y disponibilidad.
3. **Buscar grupos:** permitir que el estudiante encuentre grupos de estudio relacionados con sus cursos.

Además, el MVP permite crear grupos, unirse a grupos existentes, solicitar compañeros de estudio y solicitar ayuda académica.

## Documentación
- [PRD](docs/PRD.md)
- [FRD](docs/FRD.md)

## Prototipo en vivo

- **Producto principal:** https://studyboddy.vercel.app/
- **Solicitar compañero:** https://studyboddy.vercel.app/solicitar_companero.html
- **Solicitar ayuda académica:** https://studyboddy.vercel.app/solicitar_ayuda.html

*Nota: Las transacciones utilizan funciones serverless y las credenciales de Supabase y servicios externos permanecen seguras del lado del servidor.*

## Funcionalidades actuales

### Inscripción a grupos
StudyBuddy permite a los estudiantes inscribirse en grupos de estudio:
- El estudiante selecciona un grupo disponible.
- Proporciona su nombre y correo.
- Antes de enviar, el usuario ve un resumen y confirma la acción.
- La inscripción se procesa mediante /api/register_group.
- Se guarda en Supabase en la tabla group_registrations.
- Se genera un folio único al registrarse.

### Solicitar compañero de estudio
- Flujo en solicitar_companero.html.
- Se procesa mediante /api/request_study_partner.mjs.
- Los datos se almacenan en public.study_partner_requests.
- Se genera folio SB-P-XXXXXX con estado pending.

### Solicitar ayuda académica
- Flujo en solicitar_ayuda.html.
- Se procesa mediante /api/request_academic_help.mjs.
- Los datos se almacenan en public.academic_help_requests.
- Se genera folio SB-H-XXXXXX con estado pending.

## Asistente Inteligente (Chatbot)
StudyBuddy incluye un asistente inteligente accesible desde el producto:
- El frontend realiza la comunicación con el backend llamando a /api/chatbot.
- El backend utiliza el modelo Gemini de Google para procesar las consultas.
- La variable de entorno GEMINI_API_KEY se mantiene configurada en el servidor para la autenticación.
- El chatbot está configurado para responder únicamente con información relacionada con StudyBuddy.
