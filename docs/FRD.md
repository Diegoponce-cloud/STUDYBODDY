# FRD - StudyBuddy MVP

## Objetivo
Definir con suficiente precisión las pantallas, entradas, salidas y casos límite del MVP de StudyBuddy para que el prototipo pueda construirse sin tener que adivinar decisiones funcionales.

---

## Pantalla 1: Registro

### Qué ve el usuario
Logo de StudyBuddy, título de registro, campos para nombre, correo electrónico institucional, contraseña y confirmación de contraseña, además del botón **Crear cuenta**.

### Inputs
- Nombre.
- Correo electrónico institucional.
- Contraseña.
- Confirmar contraseña.

### Outputs
- Cuenta creada correctamente.
- El usuario es enviado a la selección de universidad.

### Edge Cases
**Correo ya registrado:** mostrar **"Este correo ya está registrado. Inicia sesión o utiliza otro correo."**

**Contraseñas diferentes:** mostrar **"Las contraseñas no coinciden."**

**Correo no institucional o inválido:** mostrar **"Ingresa un correo electrónico institucional válido."**

**Campo obligatorio vacío:** mostrar **"Completa todos los campos obligatorios."**

---

## Pantalla 2: Selección de universidad

### Qué ve el usuario
Título de selección de universidad, buscador/lista de universidades disponibles y botón **Continuar**.

### Inputs
- Universidad.

### Outputs
- Universidad guardada en el perfil.
- Navegación hacia selección de cursos.

### Edge Cases
**Universidad no seleccionada:** mostrar **"Selecciona una universidad para continuar."**

**Universidad no disponible:** mostrar **"No encontramos esa universidad. Selecciona una opción disponible."**

---

## Pantalla 3: Selección de cursos

### Qué ve el usuario
Lista de cursos disponibles para la universidad seleccionada, casillas de selección y botón **Continuar**.

### Inputs
- Uno o más cursos.

### Outputs
- Cursos asociados al perfil.
- Navegación hacia el perfil.

### Edge Cases
**Ningún curso seleccionado:** mostrar **"Selecciona al menos un curso para continuar."**

**No hay cursos disponibles:** mostrar **"No hay cursos disponibles para esta universidad."**

---

## Pantalla 4: Perfil

### Qué ve el usuario
Foto opcional, nombre, universidad, carrera, cursos, disponibilidad general y modalidad preferida. También muestra el botón **Editar perfil**.

### Inputs
- Nombre.
- Foto opcional.
- Carrera.
- Cursos.
- Disponibilidad general.
- Modalidad preferida.

### Outputs
- Perfil guardado o actualizado.
- La información pública permitida queda disponible para encontrar compañeros compatibles.

### Edge Cases
**Datos obligatorios incompletos:** mostrar **"Completa los datos obligatorios de tu perfil."**

**Error al guardar:** mostrar **"No se pudo guardar tu perfil. Intenta nuevamente."**

### Privacidad
El perfil público muestra únicamente información necesaria para encontrar compañeros: nombre, foto opcional, universidad, carrera, cursos, disponibilidad general y modalidad preferida. Nunca muestra contraseña, correo electrónico ni teléfono.

---

## Pantalla 5: Lista de grupos

### Qué ve el usuario
Lista de grupos relacionados con el curso seleccionado. Cada tarjeta muestra nombre del grupo, curso, horario, modalidad y cupos disponibles. Cada grupo tiene el botón **Unirse**. También existe el botón **Crear grupo**.

### Inputs
- Curso seleccionado.
- Filtro opcional por horario.
- Filtro opcional por modalidad.

### Outputs
- Lista filtrada de grupos.
- Acceso a la acción **Unirse**.
- Acceso a **Crear grupo**.

### Edge Cases
**No existen grupos:** mostrar **"No hay grupos disponibles para este curso."** y mostrar el botón **Crear grupo**.

**Error al cargar grupos:** mostrar **"No pudimos cargar los grupos. Intenta nuevamente."**

---

## Pantalla 6: Unirse a un grupo

### Qué ve el usuario
Información resumida del grupo seleccionado y una confirmación antes de unirse. Se muestran nombre, curso, horario, modalidad y cupos disponibles.

### Inputs
- Confirmación para unirse al grupo.

### Outputs
- Usuario registrado como miembro del grupo.
- Mensaje de confirmación.
- Regreso a la lista de grupos.

### Edge Cases
**Grupo lleno:** mostrar **"Este grupo ya está completo. Intenta con otro grupo o crea uno nuevo."**

**Grupo eliminado:** mostrar **"Este grupo ya no está disponible."**

**Usuario ya pertenece al grupo:** mostrar **"Ya eres miembro de este grupo."**

---

## Pantalla 7: Crear grupo

### Qué ve el usuario
Formulario para crear un grupo con curso, nombre, modalidad, horario y cupo máximo. También muestra el botón **Crear grupo**.

### Inputs
- Curso.
- Nombre del grupo.
- Modalidad.
- Horario.
- Cupo máximo.

### Outputs
- Nuevo grupo publicado.
- El creador queda registrado como primer miembro.
- El grupo aparece en la lista correspondiente.

### Edge Cases
**Campo obligatorio vacío:** mostrar **"Completa todos los campos para crear el grupo."**

**Cupo inválido:** mostrar **"El cupo máximo debe ser mayor que 1."**

**Error al crear:** mostrar **"No se pudo crear el grupo. Intenta nuevamente."**

---

## Reglas funcionales generales

1. Un usuario debe tener un perfil básico antes de crear o unirse a un grupo.
2. Un grupo debe tener un curso asociado.
3. Un usuario no puede unirse dos veces al mismo grupo.
4. Un usuario no puede unirse a un grupo que alcanzó su cupo máximo.
5. Un grupo creado debe aparecer en la lista correspondiente al curso.
6. Los datos privados del usuario nunca deben aparecer en el perfil público.
