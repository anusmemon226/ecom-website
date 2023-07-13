import './assets/css/App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import PrimaryNavbar from './components/PrimaryNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Home from './components/routeComponents/Home';
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Shop from './components/routeComponents/Shop';
import Contact from './components/routeComponents/Contact';
function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <PrimaryNavbar/>
      <SecondaryNavbar/>
      <Routes>
        <Route path='ecom-website/' element={<Home/>}/>
        <Route path='ecom-website/Shop' element={<Shop/>}/>
        <Route path='ecom-website/contact' element={<Contact/>}/>
        <Route path='*' element={<div>No Page Found</div>}/>
      </Routes>
      <Subscribe/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
