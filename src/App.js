import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

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
        <Route path="/product-details" element={<ProductDetail/> } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
