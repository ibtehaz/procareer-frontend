import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import {Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import SignUp from './components/Signup';



function App() {

  let [houseData, setHouseData] = useState([])

  //fetch
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("/houses.json")
      let data = await res.json()
      setHouseData(data)
    }
    fetchData()
  }
  , [])
 
  return (
    <div className="container-fluid">
        <Header />
        <SearchFilter allHouses={houseData} />
        

        <Routes>
          <Route path='/' element={<House houseInfo={houseData[4]} />} />
        <Route path='/searchresults/:county' element={<SearchResults allHouses={houseData} />} />
        <Route path='/searchedhouse/:id' element={<SearchedHouse allHouses={houseData} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element= {<SignUp />}/>
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
