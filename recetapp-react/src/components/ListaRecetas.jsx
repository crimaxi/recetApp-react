import React from 'react';
import { RecetaCard } from './RecetaCard';

export const ListaRecetas = ({ recetas }) => {
  return (
    <div className="lista-recetas">
      <h2>Nuestras Recetas</h2>
      {recetas.length === 0 ? (
        <p className="no-recetas">No hay recetas que coincidan</p>
      ) : (
        <div className="recetas-grid">
          {recetas.map((receta) => (
            <RecetaCard
              key={receta.id}
              nombre={receta.nombre}
              origen={receta.origen}
              porciones={receta.porciones}
              categoria={receta.categoria}
              descripcion={receta.descripcion}
              ingredientes={receta.ingredientes}
              esVegetariana={receta.esVegetariana}
            />
          ))}
        </div>
      )}
    </div>
  );
};
