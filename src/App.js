
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/SideBar/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
