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
  return (
    <div className="single-product-view CardItem">
      <div className="grid">
        <div className="col">
          <div className="ImageContainer">
            {/* Muestra la imagen principal */}
            <img src={img} alt={name} className="MainImage" />

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
        </div>

        <div className="col item-detail-container">
          <div className="item-details">
            <header className="Header">
              <h2 className="ItemHeader">{name}</h2>
            </header>

            <section>
              <p className="Info">Categoría: {category}</p>
              <p className="Info">Descripción: {description}</p>
              <p className="Info">Precio: ${price}</p>
            </section>

            <div className="CounterContainer">
              <ItemCount
                initial={1}
                stock={stock}
                onAdd={(quantity) =>
                  console.log("Cantidad agregada: ", quantity)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
