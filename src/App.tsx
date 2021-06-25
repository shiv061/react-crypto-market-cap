import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { MainPage, ExchangePage, CoinsPage, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/coins/:coin" component={CoinsPage} />
        <Route exact path="/exchanges" component={ExchangePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
