import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import SignInPage from './pages/SignInPage/SignInPage';
//import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/signup' component={SignInPage} />
        </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
