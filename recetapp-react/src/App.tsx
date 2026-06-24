import './App.css'
import { ListaRecetas } from './components/ListaRecetas'
import { recetas } from './data/recetas'

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>RecetaApp</h1>
        <p>Explora recetas por categoría con tarjetas visuales.</p>
      </header>

      <ListaRecetas recetas={recetas} />
    </main>
  )
}

export default App
