/* ItemDetailContainer.js */
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  // useEffect(() => {
  //   getProductById(itemId)
  //     .then((response) => {
  //       setProduct(response);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [itemId]);

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="container ItemDetailContainer">
      {product && (
        <ItemDetail
          {...product}
          img={product.img}
          additionalImages={product.additionalImages}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
