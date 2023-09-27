import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/converter">Converter</Link>
                <Link to="/products">Products</Link>
                <Link to="/trainers">Trainer</Link>
            </nav>
            <h1>My React App</h1>
        </header>
    )
}
// makes the component available to other files
export default Header;