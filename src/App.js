import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import PortfolioProjects from './pages/PortfolioProjects';
import ProjectDetails from './pages/ProjectDetails';
import ContactPage from './pages/ContactPage';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ResumePage from './pages/ResumePage'
import resume from './resume.pdf'

const reload = () => window.location.reload();

//TODO: 404 error catching
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><LandingPage /></Route>
          <Route exact path="/work"><PortfolioProjects /></Route>
          <Route path="/work/:id"><ProjectDetails /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
