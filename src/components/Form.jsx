import React, { useState } from 'react'

const Form = () => {
   const [formData, setFormData]=useState("");

   const{firstName,lastName,middleName,gender,dateOfBirth,phoneNumber,email} = formData;
  
   const handleChange =(e)=>{
     let name = e.target.name
    let value = e.target.value
    setFormData({...formData ,[name]:value});
   }
   
    console.log(formData);


   const handleSubmit=(e)=>{
    e.preventDefault();
   
  
  }




  return (
    <div className="h-screen bg-gradient-to-br from-[#000429] to-[#1e5283] flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-xl p-10">
       <form onSubmit={handleSubmit}>
       <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-2">
          <div>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"  
              name="firstName" 
              id="firstName"
              className="form-input"
              value={firstName}
              onChange={handleChange}
              />
          </div>
          <div>
            <label htmlFor="LastName" className="form-label">Last Name</label>
            <input 
               type="text"  
               name="LastName" 
               id="LastName"
               className="form-input"
               value={lastName}
               onChange={handleChange}

            />
          </div>
          <div>
            <label htmlFor="middleName" className="form-label">Middle Name</label>
            <input 
              type="text" 
              name="middleName" 
              id="middleName"
              className="form-input"
              value={middleName}
              onChange={handleChange}

            />
        </div>
       </div>
        <div>
         <label htmlFor="gender" className="Form-label" >Gender</label>
            <label htmlFor="Male">
              <input 
              type="radio"
              name="gender"
              id="male"
              value="male" 
              onChange={handleChange}
           />Male
            </label>
            <label htmlFor="Female">
              <input 
               type="radio"
               name="gender" 
               value="female" 
               id="female"
               onChange={handleChange}
            />Female
            </label>
        </div>
        <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input name="dateOfBirth" type="date" value={dateOfBirth} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="phone">Phone Number</label>
            <input 
            type="number" 
            name="phoneNumber"
            placeholder="xxx-xxx-xxxx"
            value={phoneNumber}
            onChange={handleChange}
            />
           
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email" 
              name="email"
              id="email" 
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
       </form>
      </div>
    
    </div>
  
      
    
  )
}

export default Form
