import './App.css'
import DashBoard from '../DashBoard/DashBoard'
import Home from '../Home/Home'
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>

      <nav className="navbar">
        <div className="navbar-link active">
          <a href="/" id="home"><div>Home</div></a>
        </div>
        <div className="navbar-link">
          <a href="/about" id="about"><div>About</div></a>
        </div>
        <div className="navbar-link">
          <a href="/learn" id="learn"><div>Learn</div></a>
        </div>
      </nav>
    </div>
  );
}

export default App;
