# FRD - StudyBuddy MVP (Entrega D2)

## Objetivo
Definir con suficiente precisión las pantallas, entradas, salidas y casos límite del prototipo StudyBuddy D2 para que refleje fielmente la implementación actual y el alcance del proyecto.

---

## Estado de implementación D2
- **Pantalla 1: Registro**: Implementado en `index.html`.
- **Pantalla 4: Perfil**: Parcialmente implementado en `perfil.html` (Formulario de datos académicos y visualización de resumen).
- **Otras pantallas**: Las pantallas de Selección de Universidad (como flujo independiente), Selección de Cursos, Lista de Grupos, Unirse a un Grupo y Crear Grupo quedan como funcionalidades futuras/no implementadas en la entrega D2.

---

## Pantalla 1: Registro (Implementado)

### Qué ve el usuario
Logo de StudyBuddy, título de registro, campos para nombre, correo electrónico institucional, contraseña y confirmación de contraseña, además del botón **Crear cuenta**. Incluye una transición simulada a una pantalla de éxito y un paso posterior de selección de universidad (mockup).

### Inputs
- Nombre.
- Correo electrónico institucional.
- Contraseña.
- Confirmar contraseña.

### Outputs
- Cuenta creada correctamente (simulación local).
- Transición a pantalla de éxito.
- Mockup de selección de universidad.

### Edge Cases
**Correo ya registrado:** mostrar **"Este correo ya está registrado. Inicia sesión o utiliza otro correo."**

**Contraseñas diferentes:** mostrar **"Las contraseñas no coinciden."**

**Correo no institucional o inválido:** mostrar **"Ingresa un correo electrónico institucional válido."** (Valida formato `.edu`).

**Campo obligatorio vacío:** mostrar mensaje de alerta indicando que se deben completar los campos.

---

## Pantalla 2: Selección de universidad (Funcionalidad futura / Mockup en D2)

### Qué ve el usuario
Título de selección de universidad, lista desplegable de universidades y botón **Continuar**. En D2, esta pantalla existe como un mockup dentro del flujo de registro.

### Inputs
- Universidad.

### Outputs
- Universidad seleccionada.

### Edge Cases
**Universidad no seleccionada:** mostrar **"Selecciona una universidad para continuar."**

---

## Pantalla 3: Selección de cursos (Funcionalidad futura)

### Qué ve el usuario
Lista de cursos disponibles para la universidad seleccionada, casillas de selección y botón **Continuar**.

### Inputs
- Uno o más cursos.

### Outputs
- Cursos asociados al perfil.

---

## Pantalla 4: Perfil (Parcialmente Implementado)

### Qué ve el usuario
Campos para Universidad, Carrera, Cursos, Horario y Modalidad. Botón **Guardar Perfil** y botón **Editar**. Al guardar, se muestra un resumen con la información ingresada.

### Inputs
- Universidad.
- Carrera.
- Cursos.
- Horario (Disponibilidad).
- Modalidad preferida.

### Outputs
- Perfil guardado (simulación local).
- Resumen visible del perfil.

### Edge Cases
**Formulario vacío:** se muestra un mensaje informativo indicando que el perfil está pendiente de completar.

---

## Pantalla 5: Lista de grupos (Funcionalidad futura)

### Qué ve el usuario
Lista de grupos relacionados con el curso seleccionado. Cada tarjeta muestra nombre del grupo, curso, horario, modalidad y cupos disponibles. Cada grupo tiene el botón **Unirse**. También existe el botón **Crear grupo**.

---

## Pantalla 6: Unirse a un grupo (Funcionalidad futura)

### Qué ve el usuario
Información resumida del grupo seleccionado y una confirmación antes de unirse. Se muestran nombre, curso, horario, modalidad y cupos disponibles.

---

## Pantalla 7: Crear grupo (Funcionalidad futura)

### Qué ve el usuario
Formulario para crear un grupo con curso, nombre, modalidad, horario y cupo máximo. También muestra el botón **Crear grupo**.

---

## Reglas funcionales generales para D2

1. El registro valida correos institucionales mediante expresiones regulares.
2. El perfil permite la edición y visualización de datos académicos básicos.
3. No existe persistencia real de datos (JSON estático o memoria temporal en el navegador).
4. La navegación entre Registro y Perfil no está completamente vinculada funcionalmente en esta entrega (son archivos independientes).

