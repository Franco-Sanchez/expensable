import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Expenses from './pages/Expenses';
import Income from './pages/Income';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/income" component={Income} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
