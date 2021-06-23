import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/Home.js"));
const About = lazy(() => import("./components/About.js"));
const Projects = lazy(() => import("./components/Projects.js"));
const Contact = lazy(() => import("./components/Contact.js"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App