Elemento de React : Componente
¿Dónde lo usas en este problema?:Se usa para crear bloques independientes como `RecetaCard`, `ListaRecetas` y `FiltroCategoria`
¿Por qué es el adecuado?: Permite modularizar la interfaz, facilitando el mantenimiento y la reutilización del código en la tablet.

Elemento de React : JSX
¿Dónde lo usas en este problema?: Se emplea en la estructura visual de cada tarjeta de receta para mostrar los textos, listas de ingredientes y etiquetas.
¿Por qué es el adecuado?: Combina HTML y JavaScript en un solo lugar, haciendo que el diseño del recetario sea intuitivo y rápido de programar.

Elemento de React: Props
¿Dónde lo usas en este problema?: Se usan para traspasar la información de cada receta individual (nombre, ingredientes, categoría) desde la lista hacia la tarjeta
¿Por qué es el adecuado?: Permite que un mismo diseño visual (`RecetaCard`) renderice datos dinámicos y diferentes de forma segura y ordenada.
Elemento de React: Estado (useState)
¿Dónde lo usas en este problema?: Se utiliza en `App.jsx` para almacenar el texto de búsqueda ingresado por el usuario y la categoría de filtro seleccionada 
¿Por qué es el adecuado?: Permite que la aplicación reaccione en tiempo real y se vuelva a renderizar cuando el usuario interactúa con los filtros.

Elemento de React: Renderizado de listas (.map + key)
¿Dónde lo usas en este problema?: Se aplica en `ListaRecetas` para recorrer el arreglo de recetas y generar un componente `RecetaCard` por cada una, usando el `id` como key.
¿Por qué es el adecuado?: Transforma eficientemente arreglos de datos en elementos visuales, y la `key` única ayuda a React a optimizar las actualizaciones.

Elemento de React:  Renderizado condicional
¿Dónde lo usas en este problema?: Se usa para mostrar el mensaje "No hay recetas que coincidan" y para añadir la etiqueta visual "VEG" a las recetas vegetarianas
¿Por qué es el adecuado?: Permite alterar la interfaz dinámicamente según se cumplan o no los criterios de los filtros de la aplicación 

---

Preguntas de Desarrollo

1. ¿Qué ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?
Dividir la aplicación en componentes mejora drásticamente la organización, legibilidad y escalabilidad del código. Permite aislar responsabilidades de forma que un fallo en el buscador no afecte el renderizado básico de las tarjetas. Además, facilita el trabajo en equipo, la reutilización de elementos visuales y simplifica las pruebas unitarias o correcciones específicas futuras.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
Las props son inmutables y se reciben de un componente padre, mientras que el estado es local, mutable y controlado por el propio componente para manejar su dinamismo interactivo.

Ejemplo de Prop: El objeto con los datos de una receta (como `nombre: "Tarta de Verduras"`) enviado desde `ListaRecetas` hacia `RecetaCard`.
Ejemplo de Estado: El valor guardado mediante `useState` que almacena el texto que escribe el chef en la barra de búsqueda (por ejemplo, "Tarta").
