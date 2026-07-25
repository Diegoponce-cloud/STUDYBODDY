# FRD - StudyBuddy MVP

## Flujo funcional

### Pantalla 1: Registro
**Inputs:** Nombre, correo institucional, contraseña, confirmar contraseña.  
**Outputs:** Cuenta creada y redirección a la selección de universidad. Si existen errores de validación, se muestran mensajes al usuario.

### Pantalla 2: Selección de universidad
**Inputs:** Universidad.  
**Outputs:** Universidad guardada en el perfil y carga de los cursos disponibles.

### Pantalla 3: Selección de cursos
**Inputs:** Uno o más cursos.  
**Outputs:** Cursos asociados al perfil y navegación hacia la pantalla de grupos.

### Pantalla 4: Lista de grupos
**Inputs:** Curso seleccionado y filtros opcionales (horario/modalidad).  
**Outputs:** Lista de grupos disponibles con nombre, horario, modalidad y cupos. Opciones para **Unirse** o **Crear grupo**.

### Pantalla 5: Unirse a un grupo
**Inputs:** Confirmación para unirse al grupo.  
**Outputs:** El usuario queda registrado en el grupo y recibe un mensaje de confirmación.

### Pantalla 6: Crear grupo
**Inputs:** Curso, nombre del grupo, modalidad, horario y cupo máximo.  
**Outputs:** Nuevo grupo publicado y visible para otros estudiantes.

## Caso límite (Edge Case)

**No existen grupos para el curso seleccionado.**

**Resultado esperado:**
- Mostrar el mensaje: *"No hay grupos disponibles para este curso."*
- Mostrar el botón **Crear grupo**.
- Evitar mostrar una lista vacía sin contexto.

## Estado de error

**Grupo lleno.**

Si un estudiante intenta unirse a un grupo que alcanzó su capacidad máxima:
- Mostrar el mensaje: *"Este grupo ya está completo. Intenta con otro grupo o crea uno nuevo."*
- El sistema no agrega al estudiante al grupo.
