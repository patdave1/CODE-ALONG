import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskManager from './components/TaskManager';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

function App() {
 
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/product-list" element={<ProductList/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
