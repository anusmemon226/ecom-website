import './assets/css/App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import PrimaryNavbar from './components/PrimaryNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <PrimaryNavbar/>
      <SecondaryNavbar/>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
