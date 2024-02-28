import { useState, useEffect } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

// import { db } from "../../index";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("todos");

  // const { categoryId } = useParams();

  useEffect(() => {
    // Call Firestore
    const db = getFirestore();

    var q =
      cat == "todos"
        ? query(collection(db, "items"))
        : query(collection(db, "items"), where("category", "==", cat));

    getDocs(q).then((snapshot) => {
      const dataExtraida = snapshot.docs.map((datos) => datos.data());
      setProducts(dataExtraida);
    });
  }, [cat]);

  const handleSelect = (event) => {
    setCat(event.target.value);
  };

  return (
    <div>
      <div>
        <select
          className="cat-filter"
          name="categories"
          id="categorySelect"
          value={cat}
          onChange={handleSelect}
        >
          <option value="todos">Todos</option>
          <option value="Clothing">Clothing</option>
          <option value="Shoes">Shoes</option>
          <option value="Sale">Sale</option>
        </select>
      </div>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

/* useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]); */

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       {loading ? <p>Loading...</p> : <ItemList products={products} />}
//     </div>
//   );
// };

// export default ItemListContainer;
