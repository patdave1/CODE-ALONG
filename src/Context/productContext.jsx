import { createContext, useContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  setProduct: (products) => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, setvalue] = useState([]);

  const setProducts = (products) => setvalue(products);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
