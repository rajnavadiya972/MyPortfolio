import React, { useEffect, useHistory } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './Pages/About/About';
// import Contact from './pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skill/Skill'
// import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
// import Navbar from './component/Navbar/Navbar';
import Navbar from './component/Navbar/Navbar';
import Project from './Pages/Services/Project';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './Pages/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/MyPortpholio" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/skill" exact>
              <Skill />
            </Route>
            <Route path="/project" exact>
              <Project />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </ScrollToTop>
      </main>
    </Router>
    // <Navbar />
  );
}

export default App;

