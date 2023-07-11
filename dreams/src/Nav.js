import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand mx-2" to="/">
                a.dream
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <NavLink className="nav-link" aria-current="page" to="/">
                            Home
                        </NavLink> */}
                    </li>
                  
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
