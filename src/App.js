import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import './App.css';
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Navigation from './Navigation';
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Banner/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
