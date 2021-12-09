import './App.css';

import BottomActionList from './components/displays/bottomActionList/BottomActionList';
import NavbarMenu from './components/displays/navbarMenu/NavbarMenu';
import TopSection from './components/topSection/TopSection';
import Divider from './components/displays/divider/Divider';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Reviews from './components/reviews/Reviews';
import Testimonials from './components/reviews/Testimonials';
import Quote from './components/quote/Quote';

function App() {
  return (
    <div className="container">
      <NavbarMenu />
      <div className="main-content-container">
        <TopSection />
        <Divider />
        <Testimonials />
        <Divider />
        <Reviews />
        <Divider />
        <Gallery />
        <Divider />
        <Contact />
      </div>
      <Quote />
      <BottomActionList />
    </div>
  );
}

export default App;
