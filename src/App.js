import './App.css';

import BottomActionList from './components/displays/bottomActionList/BottomActionList';
import NavbarMenu from './components/displays/navbarMenu/NavbarMenu';
import HeaderImg from './components/headerImg/HeaderImg';

function App() {
  return (
    <div className="container">
      <NavbarMenu />
      <div className="main-content-container">
        <HeaderImg />
      </div>
      <BottomActionList />
    </div>
  );
}

export default App;
