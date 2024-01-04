import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Accomplishments from './components/Accomplishments';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
     <Navbar />
     

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/expertise' element={<Expertise/>} />
      <Route path='/experience' element={<Experience/>} />
     </Routes>
    </div>
  );
}

export default App;
