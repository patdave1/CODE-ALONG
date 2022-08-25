import React from "react";
import { useParams } from "react-router-dom";
import useAxios from '../hooks/useAxios'

const ProductDetail = () => {
  const {data} = useAxios(`https://api.escuelajs.co/api/v1/products/1`)
  const { productId } = useParams();
  return (
    <div className="min-h-screen bg-slate-500 flex justify-center items-center">
      <div className="max-w-5xl bg-white grid grid-cols-2 rounded-lg">
        <div>
          <img src={data?.category.image} />
        </div>
        <div className="flex">
           {data?.images.map((image, index)=>(
            <img className="w-56" key={index} src={image}/>
           ))}    
        </div>
        <div className="p-10">
          <h3>hello</h3>
        </div>
      </div>
    </div>
  
  );
};

export default ProductDetail;
