import React, { Children, useState } from "react";
Children;
export const UserContext = React.createContext();

function Products({ children }) {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-938517f478f5b4f1f1516676a11ace16-lq",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      image:
        "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:360",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      image:
        "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/beta-f19/navigation/F19-navigation-blue-v2.png",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default Products;
