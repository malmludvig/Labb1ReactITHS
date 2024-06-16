import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import HelloWorld from './components/Counter';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">

<Navbar></Navbar>
<h1>Home page</h1>
<img src={logo} className="App-logo" alt="logo" />

<Greeting name="Ludvig" age={30} />

    </div>
  );
}

export default App;