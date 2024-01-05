import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';


function App() {

  let [houseData, setHouseData] = useState([])

  //fetch
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("./houses.json")
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
        <House houseInfo={houseData[1]} />
        
        {/* <Footer /> */}
    </div>
  );
}

export default App;
