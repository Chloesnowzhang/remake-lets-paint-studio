import './App.css';

import BottomActionList from './components/displays/bottomActionList/BottomActionList';
import NavbarMenu from './components/displays/navbarMenu/NavbarMenu';
import TopSection from './components/topSection/TopSection';
import Divider from './components/displays/divider/Divider';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className="container">
      <NavbarMenu />
      <div className="main-content-container">
        <TopSection />
        <Divider />
        <Gallery />
      </div>
      <BottomActionList />
    </div>
  );
}

export default App;
