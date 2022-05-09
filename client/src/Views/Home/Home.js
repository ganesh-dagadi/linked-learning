import { Link } from 'react-router-dom'
function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/dashboard">To dashboard</Link>
        </div>
    )
}

export default Home

