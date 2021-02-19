import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contacts from './pages/ContactsPage/Contacts';
//import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
