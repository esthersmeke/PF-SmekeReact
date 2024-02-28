/* ItemDetailContainer.js */
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  const { slugProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const filter = query(
      collection(db, "items"),
      where("itemId", "==", slugProduct)
    );

    getDocs(filter).then((snapshot) => {
      const extractedData = snapshot.docs.map((datos) => datos.data());
      setProduct(extractedData[0]);
    });
  }, []);

  // useEffect(() => {
  //   setLoading(true);

  //   const docRef = doc(db, "items", itemId);

  //   getDoc(docRef)
  //     .then((response) => {
  //       const data = response.data();
  //       const productsAdapted = { id: response.id, ...data };
  //       setProduct(productsAdapted);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [itemId]);

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
