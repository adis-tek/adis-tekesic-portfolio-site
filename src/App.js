import React from "react";
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route, useLocation } from "react-router-dom";
import ProjectBreathe from "./pages/projectsFolder/ProjectBreathe";
import GourmetGames from "./pages/projectsFolder/GourmetGames";
import FreshDish from "./pages/projectsFolder/FreshDish";
import ContactBlock from './components/ContactBlock';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop>
      <GlobalStyle />
       <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
            <Route path="/project-breathe">
              <ProjectBreathe />
            </Route>
            <Route path="/gourmet-games">
              <GourmetGames />
            </Route>
            <Route path="/fresh-dish">
              <FreshDish />
            </Route>
        </Switch>
        </ScrollToTop>
        <ContactBlock />
    </div>
  );
};

export default App;
