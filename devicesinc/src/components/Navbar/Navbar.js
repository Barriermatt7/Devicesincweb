import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/">
			Devices Inc.
		</Link>
		<div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link
						to="/"
						className={
							window.location.pathname === '/' ||
							window.location.pathname === '/home'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/about"
						className={
							window.location.pathname === '/about'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/services"
						className={
							window.location.pathname === '/services'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						Services
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/contact"
						className={
							window.location.pathname === '/contact'
								? 'nav-link active'
								: 'nav-link'
						}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
