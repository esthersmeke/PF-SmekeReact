import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
  additionalImages,
}) => {
  const [showCounter, setShowCounter] = useState(false);

  const handleShowCounter = () => {
    setShowCounter(true);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <div className="ImageContainer">
        {/* Muestra la imagen principal */}
        <img
          src={img}
          alt={name}
          className="MainImage"
          onClick={handleShowCounter}
        />

        {/* Muestra las imágenes adicionales si existen */}
        {additionalImages && additionalImages.length > 0 && (
          <div className="AdditionalImagesContainer">
            {additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name}-extra-${index + 1}`}
                className="AdditionalImage"
              />
            ))}
          </div>
        )}
      </div>
      <section>
        <p className="Info">Categoría: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {/* Muestra el contador solo si showCounter es true */}
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
        />

        {showCounter && (
          <div className="CounterContainer">
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
            />
          </div>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
