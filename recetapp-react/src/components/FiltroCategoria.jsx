import React from 'react';

export const FiltroCategoria = ({ categorias, filtroActivo, onFiltroChange }) => {
  return (
    <div className="filtro-categoria">
      <h3>Filtrar por categoría</h3>
      <div className="botones-filtro">
        <button
          className={filtroActivo === 'Todas' ? 'activo' : ''}
          onClick={() => onFiltroChange('Todas')}
        >
          Todas
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={filtroActivo === categoria ? 'activo' : ''}
            onClick={() => onFiltroChange(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  );
};
