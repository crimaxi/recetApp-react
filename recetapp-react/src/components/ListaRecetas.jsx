import React from 'react';
import { RecetaCard } from './RecetaCard';

export const ListaRecetas = ({ recetas }) => {
  return (
    <div className="lista-recetas">
      <h2>Nuestras Recetas</h2>
      {recetas.length === 0 ? (
        <p className="no-recetas">No hay recetas disponibles</p>
      ) : (
        <div className="recetas-grid">
          {recetas.map((receta) => (
            <RecetaCard key={receta.id} receta={receta} />
          ))}
        </div>
      )}
    </div>
  );
};
