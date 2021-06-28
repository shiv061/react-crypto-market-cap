import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { MainPage, ExchangePage, CoinsPage, NotFound } from './pages';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Router>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/coins/:coin" component={CoinsPage} />
            <Route exact path="/exchanges" component={ExchangePage} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Router>
    </AnimateSharedLayout>
  );
}

export default App;
