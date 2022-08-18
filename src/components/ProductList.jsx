import React, { useEffect, useState } from 'react';
import axios from "axios";
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

    useEffect(()=>{
      const getProducts = async ()=>{
        try {
          const response = await axios.get ("https://api.escuelajs.co/api/v1/products");
          setProducts(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
        getProducts();
    },[])

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
    {products.map((product)=>(
     <Product product={product}/>
    ))}
    </div>
  )
}

export default ProductList