import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path = "/leagues/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router> 
   
    
  );
}

export default App;
