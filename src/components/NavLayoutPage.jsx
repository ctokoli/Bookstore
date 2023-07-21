import { Outlet, Link } from 'react-router-dom';

const NavLayout = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/">Books</Link>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
     );
}
 
export default NavLayout;