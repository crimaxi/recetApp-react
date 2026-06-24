import React from 'react';

export const RecetaCard = ({ receta }) => {
  return (
    <div className="receta-card">
      <h3>{receta.nombre}</h3>
      <p className="categoria">{receta.categoria}</p>
      <p className="descripcion">{receta.descripcion}</p>
      <div className="details">
        <span className="tiempo">⏱️ {receta.tiempo} min</span>
      </div>
      <div className="ingredientes">
        <h4>Ingredientes:</h4>
        <ul>
          {receta.ingredientes.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
