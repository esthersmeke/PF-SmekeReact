import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Item = (props) => {
  const { id, title, image, price, stock, itemId } = props.product;

  const { addItem } = useContext(CartContext);
  // Lógica para agregar el producto al carrito
  const handleAddToCart = () => {
    addItem({ id, title, image, price, stock }, 1); // Assuming you want to add one item each time the button is clicked
    console.log(`Producto agregado al carrito: ${title}`);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{title}</h2>
      </header>
      <picture>
        <img src={image} alt={title} className="Itemimage" />
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
        <Link to={"/item/" + itemId} className="Option">
          Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;
