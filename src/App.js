import React from "react";
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route, useLocation } from "react-router-dom";
import CovidTracker from "./pages/projectsFolder/CovidTracker";
import GourmetGames from "./pages/projectsFolder/GourmetGames";
import MusicPlayer from "./pages/projectsFolder/MusicPlayer";
import ContactBlock from './components/ContactBlock';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
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
          <Route path="/projects/music-player">
            <MusicPlayer />
          </Route>
        </Switch>
        <ContactBlock />
    </div>
  );
};

export default App;
