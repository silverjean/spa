import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar';

import Home from './components/HomePage/Home';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import SingUp from './components/SingUp/SingUp';

import './styles/App.css';

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sing-up' component={SingUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
