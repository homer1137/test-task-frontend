import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Navibar from "./Components/Navibar/Navibar";
import Forms from './Components/Forms/Forms';
import Page404 from './Components/404/404';
import { Link } from 'react-router-dom';
import Modal from './Components/Modal/Modal'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path='/'>
          <Navibar/>
        </Route>
        <Route exact path='/phone/:phoneId'>
          <Forms/>
        </Route>
        <Route exact path='/result/'>
          <Modal/>
        </Route>
        <Route path='*'>
          <Page404/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
