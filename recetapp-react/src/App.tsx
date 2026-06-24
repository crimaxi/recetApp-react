import { useState } from 'react'
import './App.css'
import { FiltroCategoria } from './components/FiltroCategoria'
import { ListaRecetas } from './components/ListaRecetas'
import { recetas } from './data/recetas'

const categoriasDisponibles = ['Entrada', 'Fondo', 'Postre']

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const busquedaNormalizada = busqueda.trim().slice(0, 50).toLowerCase()

  const recetasFiltradas = recetas.filter((receta: { categoria: string; nombre: string; esVegetariana?: boolean }) => {
    const categoriaMatch =
      categoriaActiva === 'Todas' || receta.categoria === categoriaActiva
    const nombreMatch = receta.nombre
      .toLowerCase()
      .includes(busquedaNormalizada)

    return categoriaMatch && (busquedaNormalizada === '' || nombreMatch)
  })

  const vegetarianasCount = recetasFiltradas.filter((receta: { esVegetariana?: boolean }) => receta.esVegetariana).length

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>RecetaApp</h1>
        <p>Explora recetas por categoría con tarjetas visuales.</p>
        <p className="veg-counter">Recetas vegetarianas: {vegetarianasCount}</p>
      </header>

      <section className="app-controls">
        <div className="search-field">
          <label htmlFor="search">Buscar por nombre</label>
          <input
            id="search"
            name="search"
            type="text"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value.slice(0, 50))}
            placeholder="Ej. Tarta de Verduras"
            maxLength={50}
          />
        </div>

        <FiltroCategoria
          categorias={categoriasDisponibles}
          filtroActivo={categoriaActiva}
          onFiltroChange={setCategoriaActiva}
        />
      </section>

      <ListaRecetas recetas={recetasFiltradas} />
    </main>
  )
}

export default App
