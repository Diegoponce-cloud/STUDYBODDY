# FRD - StudyBuddy (Entrega D3)

## Objetivo
Definir con precisión las funcionalidades, pantallas e integraciones del producto StudyBuddy (Entrega D3) para reflejar fielmente la implementación actual.

---

## Estado de implementación D3
- **Pantalla 1: Registro/Inicio**: Implementado en `index.html`.
- **Pantalla 2: Perfil del Estudiante**: Implementado en `perfil.html`, permite ingresar y visualizar datos académicos.
- **Pantalla 3: Crear grupo de estudio**: Implementado en `crear_grupo.html`, conectado a Supabase.
- **Navegación**: Implementada entre las pantallas principales.
- **Persistencia**: Integración con Supabase para la creación de grupos.
- **Despliegue**: https://studyboddy.vercel.app/

---

## Pantalla 1: Registro/Inicio
### Qué ve el usuario
Logo de StudyBuddy, título y formulario de registro/inicio.

---

## Pantalla 2: Perfil del Estudiante
### Qué ve el usuario
Interfaz para ingresar y visualizar información académica y preferencias del estudiante.

### Campos
- Universidad.
- Carrera.
- Cursos.
- Horarios disponibles.
- Modalidad de estudio.

### Funcionalidades
- Visualización de datos guardados.
- Botón **"Crear grupo de estudio"** que dirige a `crear_grupo.html`.

---

## Pantalla 3: Crear grupo de estudio (`crear_grupo.html`)
### Qué ve el usuario
Formulario para registrar un nuevo grupo de estudio.

### Inputs del formulario
- Curso.
- Nombre del grupo.
- Modalidad.
- Horario.
- Cupo máximo.

### Funcionalidades
- **Conexión a Supabase**: Los datos se guardan en la tabla `grupos_estudio`.
- **Registro automático**: La tabla utiliza el campo `created_at` para la fecha y hora de creación.
- **Navegación**: Opción "Volver al perfil" para regresar a la pantalla anterior.

---

## Reglas funcionales generales
1. StudyBuddy utiliza Bootstrap 5 para el diseño.
2. El formulario de creación de grupo persiste información de forma real en la base de datos Supabase configurada.
3. El despliegue de la aplicación se gestiona a través de Vercel.

