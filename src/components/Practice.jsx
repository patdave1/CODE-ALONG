import React from 'react'
import pic from '../assets/image/pic.jpg'
const Practice = () => {
  return (
   <div className="flex justify-center items-center h-screen">
     <div className="shadow-md w-96">
       <div className="h-100 overflow-hidden ">
        <img src={pic} alt=""/>
       </div>
       <div className="p-5">
        <div className="flex justify-between">
          <h3 className="font-bold">office space</h3>
          <h6>GHC 4500</h6>
        </div>
       <p>Set up a modern web app by running one command. Contribute to facebook/create-react-app development by creating an account on GitHub.</p>
       </div>
    </div>
   </div>
  )
}

export default Practice
