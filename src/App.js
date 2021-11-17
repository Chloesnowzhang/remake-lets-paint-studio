import './App.css';

import BottomActionList from './components/displays/bottomActionList/BottomActionList';
import NavbarMenu from './components/displays/navbarMenu/NavbarMenu';
import TopSection from './components/topSection/TopSection';
import Divider from './components/displays/divider/Divider';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="container">
      <NavbarMenu />
      <div className="main-content-container">
        <TopSection />
        <Divider />
        <Gallery />
        <Divider />
        <Contact />
      </div>
      <BottomActionList />
    </div>
  );
}

export default App;
