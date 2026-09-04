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

## Fuera del MVP
IA, chat, videollamadas, calendario, compartir archivos, recordatorios y monetización Freemium no forman parte del MVP actual.
## Prototipo en vivo

El prototipo funcional de StudyBuddy está disponible en:

https://studyboddy.vercel.app/

## Funcionalidad de inscripción a grupos

StudyBuddy permite al estudiante seleccionar un grupo de estudio disponible e inscribirse proporcionando su nombre y correo electrónico.

Al completar la inscripción, el sistema:

- Registra la información en Supabase.
- Genera un folio único para la inscripción.
- Permite consultar posteriormente la inscripción utilizando el folio.
- Muestra el grupo y el estado de la inscripción.

### Prueba funcional

Se realizó una prueba de inscripción al grupo "Cálculo Avanzado".

Folio de prueba: SB-275197

Resultado: inscripción creada correctamente, almacenada en Supabase y consultada exitosamente mediante el folio.

