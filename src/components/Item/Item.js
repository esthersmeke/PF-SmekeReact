import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${name}`);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
        {/* Agrega el botón "Agregar al carrito" aquí */}
        <button className="AddToCartButton" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
