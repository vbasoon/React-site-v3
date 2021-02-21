import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import SignUp from './pages/SignUpPage/SignUp';
//import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/signup' component={SignUp} />
          SignUp
        </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
