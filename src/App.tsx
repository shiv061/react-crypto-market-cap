import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CoinPage from './pages/CoinPage';
import NotFound from './pages/NotFound';
import Exchanges from './pages/Exchanges';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/coins/:coin" component={CoinPage} />
        <Route exact path="/exchanges" component={Exchanges} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
