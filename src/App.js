import React from "react";
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { Switch, Route, useLocation } from "react-router-dom";
import CovidTracker from "./pages/projectsFolder/CovidTracker";
import GourmetGames from "./pages/projectsFolder/GourmetGames";
import SpotifyClone from "./pages/projectsFolder/SpotifyClone";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/covid-tracker">
            <CovidTracker />
          </Route>
          <Route path="/projects/gourmet-games">
            <GourmetGames />
          </Route>
          <Route path="/projects/spotify-clone">
            <SpotifyClone />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </div>
  );
};

export default App;
