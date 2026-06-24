import React from 'react';
import PropTypes from 'prop-types';

const categoryStyles = {
  Entrada: 'entrada',
  Fondo: 'fondo',
  Postre: 'postre'
};

export const RecetaCard = ({ nombre, origen, porciones, categoria, descripcion, ingredientes = [], esVegetariana = false }) => {
  const categoryClass = categoryStyles[categoria] || 'otra-categoria';
  const vegetarianClass = esVegetariana ? 'vegetariana' : '';

  return (
    <article className={`receta-card ${categoryClass} ${vegetarianClass}`}>
      <header className="receta-card-header">
        <div>
          <h3>{nombre}</h3>
          <p className="receta-origen">{origen}</p>
        </div>
        <div className="header-badges">
          <span className={`categoria-badge ${categoryClass}`}>{categoria}</span>
          {esVegetariana && <span className="veg-badge">VEG</span>}
        </div>
      </header>

      <div className="receta-meta">
        <p><strong>Porciones:</strong> {porciones}</p>
      </div>

      <p className="descripcion">{descripcion}</p>

      <div className="ingredientes">
        <h4>Ingredientes</h4>
        <ul>
          {ingredientes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.number,
  categoria: PropTypes.oneOf(['Entrada', 'Fondo', 'Postre']),
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
  esVegetariana: PropTypes.bool
};

RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Origen desconocido',
  porciones: 1,
  categoria: 'Entrada',
  descripcion: 'No hay descripción disponible.',
  ingredientes: [],
  esVegetariana: false
};
