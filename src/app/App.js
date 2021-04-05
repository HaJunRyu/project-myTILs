import HomePage from 'pages/HomePage';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect to="/page-not-found" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
