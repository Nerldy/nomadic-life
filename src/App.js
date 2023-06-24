import './App.css';
import Navbar from './NavBar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <h1>
          <Home/>
        </h1>
      </div>
    </div>
  );
}

export default App;
