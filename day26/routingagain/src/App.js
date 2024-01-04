import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CEO from './components/CEO';
import CFO from './components/CFO';
import PageNotFound from './components/PageNotFound';
import Students from './components/Students';
import Users from './components/Users';
import NavigateExample from './components/NavigateExample';
import Trainers from './components/Trainers';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}>
        <Route path='ceo' element={<CEO />}/>
        <Route path='cfo' element={<CFO />}/>
      </Route>
      <Route path='/students/:name/:id' element={<Students />} />
      <Route path='/users' element={<Users />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/trainers' element={<Trainers />} />
      <Route path='/nav' element={<NavigateExample />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </div>
  );
}

export default App;
