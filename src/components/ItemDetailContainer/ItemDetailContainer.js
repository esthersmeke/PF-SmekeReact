/* ItemDetailContainer.js */
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../index";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProduct(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  /*  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]); */

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
