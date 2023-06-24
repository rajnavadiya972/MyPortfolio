import React from 'react';
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

        <Switch>
          <ScrollToTop>
            <Route path="/MyPortpholio" exact>
              <Home />
            </Route>
            <Route path="/MyPortpholio/about" exact>
              <About />
            </Route>
            <Route path="/MyPortpholio/skill" exact>
              <Skill />
            </Route>
            <Route path="/MyPortpholio/project" exact>
              <Project />
            </Route>
            <Route path="/MyPortpholio/contact" exact>
              <Contact />
            </Route>
          </ScrollToTop>
        </Switch>
      </main>
    </Router>
    // <Navbar />
  );
}

export default App;

