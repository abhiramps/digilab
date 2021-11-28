// import './App.css';
import './App.scss';
import About from './components/About/About';
import Blog from './components/blog/Blog';
import CarouselComponent from './components/Carousal/CarouselComponent';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import NavBarComponent from "./components/NavBar/NavBarComponent";
// import NavBarScroll from './components/NavBar/NavBarScroll';
import Projects from './components/projects/Projects';
import Research from './components/Research/Research';
import Services from './components/services/Services';
import Staff from './components/staff/Staff';

function App() {
  return (
    <div>
      <NavBarComponent/>
      {/* <NavBarScroll/> */}
      <CarouselComponent/>
      <Services/>
      <Research/>
      <Projects/>
      <About/>
      <Staff/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
      
      
      
      
                  


