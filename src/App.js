import React from 'react'
import Button from './components/Button'
import Header from './components/Header'
import { Image } from './components/Image'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Button label="Add to Cart"/>
      <Button label="Read More"/>
      <Button label="Register"/>
      <Button label="Login"/>
      <Image/>
    </div>
  )
}

export default App