import { NavLink, Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <Link to='/' id="logo">
                    Sami<span>Goran</span>
                </Link>

                <nav>
                    <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
                    <ul className="menu">
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/resume'>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/portfolio'>
                                Porfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </nav>
                <a className="github-btn">SamiHub</a>
                <div className="ham-menu">
                    <label htmlFor="nav-toggle">
                        <i className="fa-solid fa-burger" />
                    </label>
                </div>
            </header>

        </>
    )
}