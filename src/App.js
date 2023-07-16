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
import Register from './components/routeComponents/Register';
import Login from './components/routeComponents/Login';
import Cart from './components/routeComponents/Cart';
import Error from './components/routeComponents/Error';
function App() {
  return (
        <BrowserRouter>
          <TopBar/>
          <PrimaryNavbar/>
          <SecondaryNavbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='ecom-website/' element={<Home/>}/>
            <Route path='ecom-website/Shop' element={<Shop/>}/>
            <Route path='ecom-website/contact' element={<Contact/>}/>
            <Route path='ecom-website/register' element={<Register/>}/>
            <Route path='ecom-website/login' element={<Login/>}/>
            <Route path='ecom-website/cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <Subscribe/>
          <Footer/>
        </BrowserRouter>
  );
}

export default App;
