# StudyBuddy

StudyBuddy es una plataforma que ayuda a estudiantes a encontrar compañeros de estudio y grupos compatibles según universidad, carrera, cursos, horarios y modalidad.

## MVP

### Tres Must principales
1. **Registro:** permitir que un estudiante cree una cuenta y complete la información inicial.
2. **Perfil:** permitir que el estudiante gestione universidad, carrera, cursos y disponibilidad.
3. **Buscar grupos:** permitir que el estudiante encuentre grupos de estudio relacionados con sus cursos.

Además, el MVP permite crear grupos y unirse a grupos existentes.

## Documentación
- [PRD](docs/PRD.md)
- [FRD](docs/FRD.md)

## Prototipo en vivo

El prototipo funcional de StudyBuddy está disponible en:

https://studyboddy.vercel.app/

## Funcionalidad de inscripción a grupos

StudyBuddy permite a los estudiantes inscribirse en grupos de estudio:

- El estudiante selecciona un grupo disponible.
- Proporciona su nombre y correo.
- Antes de enviar, el usuario ve un resumen y confirma la acción.
- La inscripción se procesa mediante `/api/register_group`.
- Se guarda en Supabase en la tabla `group_registrations`.
- Se genera un folio único al registrarse.
- Se almacena un estado para la inscripción.
- El folio generado permite consultar el estado de la inscripción.

### Prueba funcional

Se realizó una prueba de inscripción al grupo "Cálculo Avanzado".

Folio de prueba: SB-275197

Resultado: inscripción creada correctamente, almacenada en Supabase y consultada exitosamente mediante el folio.

## Asistente Inteligente (Chatbot)

StudyBuddy incluye un asistente inteligente accesible desde el producto:

- El frontend realiza la comunicación con el backend llamando a `/api/chatbot`.
- El backend utiliza el modelo Gemini de Google para procesar las consultas.
- La variable de entorno `GEMINI_API_KEY` se mantiene configurada en el servidor para la autenticación.
- El chatbot está configurado para responder únicamente con información relacionada con StudyBuddy.

