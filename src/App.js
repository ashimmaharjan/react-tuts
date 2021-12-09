import './App.css';
import UseState from './components/Use-State-Example';
import Navbar from './components/Navbar';
import Home from './components/Home'

function App() {
  const title = "Let's Learn React"

  return (
    <div className="App px-20">
      <Navbar></Navbar>
      <h1 className="text-blue-800 text-2xl  mt-4 text-center animate-pulse">{title}</h1>
      <div className="w-20 h-0.5 bg-gray-600 mt-1 mx-auto"></div>

      <div className="content mt-5">
        <UseState></UseState>
      </div>

      <div className="blogs">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
