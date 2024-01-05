import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact/ >} />
      <Route path='*' element={<PageNotFound />} />
     </Routes>
     <Footer />

    </div>
  );
}

export default App;
