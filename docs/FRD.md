# FRD - StudyBuddy MVP

## Objetivo funcional
Este documento define con suficiente detalle las pantallas y comportamientos del MVP para que el prototipo pueda construirse sin tener que adivinar decisiones funcionales.

### Pantalla 1: Registro
**Qué ve el usuario:** Logo de StudyBuddy, campos para nombre, correo institucional, contraseña y confirmar contraseña, botón **Registrarse** y opción para iniciar sesión.

**Inputs:** Nombre, correo institucional, contraseña y confirmar contraseña.

**Outputs:** Cuenta creada y redirección a la pantalla de perfil/selección de universidad.

**Edge cases:**
- Correo ya registrado → **"Este correo ya está registrado."**
- Correo no institucional o inválido → **"Usa un correo institucional válido."**
- Contraseñas diferentes → **"Las contraseñas no coinciden."**
- Campo obligatorio vacío → **"Completa todos los campos obligatorios."**

### Pantalla 2: Perfil
**Qué ve el usuario:** Nombre, foto opcional, universidad, carrera, cursos y disponibilidad/horarios. También ve los botones **Guardar** y **Editar perfil**.

**Inputs:** Nombre, foto opcional, universidad, carrera, uno o más cursos y disponibilidad/horarios.

**Outputs:** Perfil guardado y datos disponibles para encontrar grupos y compañeros compatibles.

**Edge cases:**
- Falta un dato obligatorio → **"Completa los campos obligatorios de tu perfil."**
- No se puede guardar → **"No se pudo guardar tu perfil. Intenta nuevamente."**

### Pantalla 3: Selección de universidad
**Qué ve el usuario:** Lista o campo de búsqueda de universidades, universidad seleccionada y botón **Continuar**.

**Inputs:** Universidad.

**Outputs:** Universidad guardada en el perfil y carga de cursos disponibles.

**Edge cases:**
- No se seleccionó universidad → **"Selecciona una universidad para continuar."**
- Universidad no disponible → **"No encontramos esa universidad. Verifica la información."**

### Pantalla 4: Selección de cursos
**Qué ve el usuario:** Lista de cursos disponibles, buscador, cursos seleccionados y botón **Continuar**.

**Inputs:** Uno o más cursos.

**Outputs:** Cursos asociados al perfil y navegación hacia la pantalla de grupos.

**Edge cases:**
- No se seleccionó ningún curso → **"Selecciona al menos un curso para continuar."**
- Curso no disponible → **"Este curso no está disponible actualmente."**

### Pantalla 5: Lista de grupos
**Qué ve el usuario:** Nombre de cada grupo, curso, horario, modalidad, cupos disponibles y botones **Unirse** y **Crear grupo**. También puede usar filtros de horario y modalidad.

**Inputs:** Curso seleccionado y filtros opcionales de horario/modalidad.

**Outputs:** Lista de grupos disponibles que cumplen los filtros.

**Edge cases:**
- No existen grupos → **"No hay grupos disponibles para este curso."** y se muestra el botón **Crear grupo**.
- Todos los grupos encontrados están llenos → **"No hay cupos disponibles en los grupos encontrados."**

### Pantalla 6: Unirse a un grupo
**Qué ve el usuario:** Resumen del grupo seleccionado, curso, horario, modalidad, cupos disponibles y botón de confirmación **Unirme al grupo**.

**Inputs:** Confirmación para unirse al grupo.

**Outputs:** El usuario queda registrado en el grupo y recibe confirmación.

**Edge cases:**
- Grupo lleno → **"Este grupo ya está completo. Intenta con otro grupo o crea uno nuevo."**
- El usuario ya pertenece al grupo → **"Ya perteneces a este grupo."**
- Grupo eliminado → **"Este grupo ya no está disponible."**

### Pantalla 7: Crear grupo
**Qué ve el usuario:** Formulario para crear un grupo con curso, nombre, modalidad, horario y cupo máximo, además del botón **Crear grupo**.

**Inputs:** Curso, nombre del grupo, modalidad, horario y cupo máximo.

**Outputs:** Nuevo grupo publicado y visible para otros estudiantes.

**Edge cases:**
- Falta información obligatoria → **"Completa todos los campos obligatorios."**
- Nombre de grupo ya utilizado en el mismo curso → **"Ya existe un grupo con ese nombre para este curso."**
- Cupo inválido → **"El cupo máximo debe ser mayor que 0."**

## Reglas de perfil público y privacidad
**Información visible:** nombre, foto opcional, universidad, carrera, cursos y disponibilidad/horarios.

**Información privada:** contraseña, correo electrónico de acceso, teléfono y cualquier dato personal que no sea necesario para encontrar compañeros.

## Reglas generales
- Los mensajes de error deben mostrarse junto al campo o acción que generó el problema.
- Una acción que falla no debe guardar cambios parciales.
- Los grupos no pueden aceptar usuarios cuando alcanzan el cupo máximo.
- Un usuario no puede unirse dos veces al mismo grupo.
- El perfil debe poder editarse después del registro.
