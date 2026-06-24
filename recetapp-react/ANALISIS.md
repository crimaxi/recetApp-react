# Análisis del Proyecto RecetaApp React

## Descripción General
RecetaApp es una aplicación web de React diseñada para mostrar y filtrar recetas de diferentes categorías culinarias. La aplicación permite a los usuarios explorar recetas, ver ingredientes y tiempos de preparación.

## Estructura del Proyecto

### Directorios Principales
- **src/components/** - Componentes reutilizables de React
- **src/data/** - Datos y información de recetas
- **public/** - Archivos estáticos
- **src/** - Código fuente principal

### Componentes

#### 1. RecetaCard.jsx
- Componente que muestra una receta individual
- Props: `receta` (objeto con datos de la receta)
- Muestra: nombre, categoría, descripción, tiempo, ingredientes

#### 2. ListaRecetas.jsx
- Componente contenedor que renderiza múltiples RecetaCard
- Props: `recetas` (array de recetas)
- Maneja el caso de lista vacía

#### 3. FiltroCategoria.jsx
- Componente de filtrado por categoría
- Props: `categorias`, `filtroActivo`, `onFiltroChange`
- Permite seleccionar categorías para filtrar recetas

### Datos

#### recetas.js
- Archivo con el array de recetas disponibles
- Cada receta contiene: id, nombre, categoría, ingredientes, tiempo, descripción
- 5 recetas de ejemplo (Italiana, Mexicana, Japonesa, Española)

## Funcionalidades

1. **Visualización de Recetas** - Mostrar todas las recetas disponibles
2. **Filtrado por Categoría** - Filtrar recetas según su categoría
3. **Información Detallada** - Ver ingredientes y tiempo de preparación

## Tecnologías Utilizadas
- React (con JSX)
- JavaScript ES6+
- Vite (herramienta de construcción)
- CSS para estilos

## Próximos Pasos
- Implementar lógica de filtrado en el componente App
- Añadir estilos CSS completos
- Agregar más recetas a la base de datos
- Implementar búsqueda por nombre de receta
