import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import { Navbar } from './Components/Navbar/navbar';
import { Home } from './Components/Home/home';
import { Aboutit } from './Components/Aboutit/aboutit';
import { Updates } from './Components/Updates/updates';
import { CardOverlay } from './Components/CardOverlay/cardoverlay';
import { Ethos } from './Components/Ethos/ethos';
import { Footer } from './Components/Footer/footer';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Aboutit/>
    <Updates/>
    <CardOverlay/>
    <Ethos/>
    <Footer/>
    </>
    );
}

export default App;
