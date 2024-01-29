const products = [
  {
    id: "1",
    name: "iPhone 12",
    price: 1000,
    category: "celular",
    img: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png",
    stock: 25,
    description: "Descripción de iPhone 12",
  },
  {
    id: "2",
    name: "Samsung S21",
    price: 800,
    category: "celular",
    img: "https://www.corning.com/microsites/csm/gorillaglass/Samsung/CGG_Samsun_galaxys21_phantom.jpg",
    stock: 25,
    description: "Descripción de Samsung S21",
  },
  {
    id: "3",
    name: "iPad 8va generación",
    price: 1200,
    category: "tablet",
    img: "https://www.theioutlet.com/wp-content/uploads/2023/01/iPad-2019-Silver.png?resize=600,720",
    stock: 25,
    description: "Descripción de iPad 8va generación",
  },
];

export const getProductById = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    // Simulate fetching products by category
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setTimeout(() => {
      resolve(filteredProducts);
    }, 500);
  });
};
