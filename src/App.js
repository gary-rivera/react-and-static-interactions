import Nav from './components/Nav';
import Main from './pages/Main';
import PortfolioProjects from './pages/PortfolioProjects';
import ProjectDetails from './pages/ProjectDetails';
import ContactPage from './pages/ContactPage';
import GlobalStyle from './utils/GlobalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


//TODO: 404 error catching
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/work"><PortfolioProjects /></Route>
          <Route path="/work/:id"><ProjectDetails /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
