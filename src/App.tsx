import { Switch, Route, useLocation } from 'react-router-dom';
import { Header } from './components';
import { MainPage, ExchangePage, CoinsPage, NotFound } from './pages';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/coins/:coin" component={CoinsPage} />
        <Route exact path="/exchanges" component={ExchangePage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
