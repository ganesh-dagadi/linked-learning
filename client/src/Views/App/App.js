import './App.css'
import DashBoard from '../DashBoard/DashBoard'
import Home from '../Home/Home'
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <span className='logo'><h3>Linked Learning</h3></span>
          <button className='donate btn-success'>Donate</button>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>

        <nav className="navbar">
          <div className="navbar-link active">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-link">
            <Link to="/user/450505"><img src='https://randomuser.me/api/portraits/women/91.jpg' /></Link>
          </div>
          <div className="navbar-link">
            <a href="/learn" id="learn"><div>Logout</div></a>
          </div>
        </nav>
      </div>
    </div>
  );
}

function User(props) {
  return (
    <div>
      User page
    </div>
  )
}
export default App;
