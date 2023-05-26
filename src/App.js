import "./App.css";
import PriceCard from "./components/priceCard/PriceCard";
import UserData from "./components/signUp/ShowUserData";
import SignMeupex from "./components/signUp/SignMeupex";
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<SignMeupex/>}/>
        <Route path="/pricecard" element={<PriceCard/>}/>
        <Route path="/userdata" element={<UserData/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
