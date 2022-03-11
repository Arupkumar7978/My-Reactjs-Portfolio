import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar title="PortFolio" />

        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/contact" component={Contact} />
         
        </Switch>

        <SocialLinks />
      </Router>
    </>
  );
}

export default App;
