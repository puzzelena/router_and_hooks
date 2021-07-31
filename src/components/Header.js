import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <> {/* Fragments uses less memory than div */} 
            <h1> React DOM tutorial </h1>
            <ul className='nav'>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about"> About </Link> </li>
                <li> <Link to="/profile"> Profile </Link> </li>
            </ul>
        </>
    )
}

export default Header
