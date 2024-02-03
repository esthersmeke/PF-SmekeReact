const products = [
  {
    id: "1",
    name: "Corso Crossover Legging",
    price: 88,
    category: "clothing",
    img: "https://cdn.shopify.com/s/files/1/0250/5696/8738/products/BRS19132-BLACK_ecomm_0002_450x.jpg?v=1611241772",
    stock: 25,
    description: "Color Black",
    additionalImages: [
      "https://www.bandier.com/cdn/shop/products/BRS19132-BLACK_ecomm_0026_1536x.jpg?v=1611241772",
      "url2.jpg",
      // ... más imágenes adicionales ...
    ],
  },
  {
    id: "2",
    name: "Corso Crossover Bra",
    price: 68,
    category: "clothing",
    img: "https://cdn.shopify.com/s/files/1/0250/5696/8738/products/BRS19130-BLACK_ecomm_0029_450x.jpg?v=1611242071",
    stock: 25,
    description: "Color Black",
  },
  {
    id: "3",
    name: "Women's Cloudmonster",
    price: 170,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0250/5696/8738/files/SmallPNG-61.98285-cloudmonster-ss23-undyed_white_white-w-g1_450x.jpg?v=1701874240",
    stock: 25,
    description: "Undyed-White/White",
  },
  {
    id: "4",
    name: "V-Neck Tempo Crop Bra",
    price: 48.8,
    category: "sale",
    img: "https://cdn.shopify.com/s/files/1/0250/5696/8738/files/BND10194-BAJABLUE-BANDIER-1_2_450x.jpg?v=1690912023",
    stock: 10,
    description: "Color Baja Blue",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === productId);
      resolve(product ? [product] : []); // Devolver un array con el producto o un array vacío si no se encuentra
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setTimeout(() => {
      resolve(filteredProducts);
    }, 500);
  });
};
