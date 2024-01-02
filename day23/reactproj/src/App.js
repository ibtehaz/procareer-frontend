import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import Card from './components/Card';

import data from './data.json';

function App() {
  return (
    <div>
      <Navbar />
      
        <div className='container'>
        <Card />
        </div>
      
      <Footer />
    </div>
  );
}

export default App;
