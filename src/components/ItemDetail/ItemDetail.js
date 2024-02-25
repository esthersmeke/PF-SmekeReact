import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

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
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

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
              {quantityAdded > 0 ? (
                <Link to="/cart" className="Option Button">
                  Terminar Compra
                </Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
