import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Item = ({ id, name, image, price, stock }) => {
  const { addItem } = useContext(CartContext);
  // Lógica para agregar el producto al carrito
  const handleAddToCart = () => {
    addItem({ id, name, image, price, stock }, 1); // Assuming you want to add one item each time the button is clicked
    console.log(`Producto agregado al carrito: ${name}`);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={image} alt={name} className="Itemimage" />
      </picture>
      <section>
        <p className="Info">Price: ${price}</p>
        <p className="Info">Stock: {stock}</p>
        {/* Agrega el botón "Agregar al carrito" aquí */}
        <button className="AddToCartButton" onClick={handleAddToCart}>
          Add to cart
        </button>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;
