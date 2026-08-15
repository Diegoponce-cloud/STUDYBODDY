# D3 - Diseño de tabla de StudyBuddy

## Necesidad principal

Alguien visita StudyBuddy, y lo que más me gustaría que pudiera indicarme es la información necesaria para crear un grupo de estudio.

## Diseño de la tabla

Table name: grupos

| Column | Where it comes from in my spec |
|---|---|
| curso | Proviene de la Pantalla 7 "Crear grupo", donde el FRD indica que el usuario debe ingresar o seleccionar el curso del grupo de estudio. |
| nombre | Proviene de la Pantalla 7 "Crear grupo", donde el formulario solicita un nombre para identificar el grupo. |
| modalidad | Proviene de la Pantalla 7 "Crear grupo", donde el formulario solicita definir la modalidad del grupo de estudio. |
| horario | Proviene de la Pantalla 7 "Crear grupo", donde el formulario solicita indicar el horario del grupo. |
| cupo_maximo | Proviene de la Pantalla 7 "Crear grupo", donde el FRD indica que el usuario debe establecer el cupo máximo del grupo. |

Nota: Las columnas de identificador y fecha/hora serán creadas automáticamente por Supabase y se conservarán sin modificaciones.
