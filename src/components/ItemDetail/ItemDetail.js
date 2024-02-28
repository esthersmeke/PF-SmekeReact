import React, { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useParams, Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  title,
  image,
  category,
  description,
  price,
  stock,
  additionalImages,
}) => {
  const { slugItem } = useParams();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      price,
    };

    addItem(item, quantity);
  };

  useEffect(() => {
    const db = getFireStore();

    const filter = query(
      collection(db, "items"),
      where("slug", "==", slugProduct)
    );
  });

  return (
    <div className="single-product-view CardItem">
      <div className="grid">
        <div className="col">
          <div className="ImageContainer">
            {/* Muestra la imagen principal */}
            <img src={image} alt={title} className="MainImage" />

            {/* Muestra las imágenes adicionales si existen */}
            {additionalImages && additionalImages.length > 0 && (
              <div className="AdditionalImagesContainer">
                {additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${title}-extra-${index + 1}`}
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
              <h2 className="ItemHeader">{title}</h2>
            </header>

            <section>
              <p className="Info">Category: {category}</p>
              <p className="Info">Description: {description}</p>
              <p className="Info">Price: ${price}</p>
            </section>

            <div className="CounterContainer">
              {quantityAdded > 0 ? (
                <Link to="/cart" className="Option Button">
                  Go to Cart
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
