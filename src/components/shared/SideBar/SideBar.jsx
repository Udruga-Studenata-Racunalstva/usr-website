import React from 'react';

import { Link } from 'react-router-dom'

const SideBar = () => {
	return (
		<div className="side_bar">
				<h3 className="side_bar-title">EXPLORER</h3>
				<h3 className="side_bar-subtitle">USR-WEBSITE</h3>

				<nav className="side_bar-nav">
					<Link to="/naslovnica" className="side_bar-link">Naslovnica.md</Link>
					<Link to="/novosti" className="side_bar-link">Novosti.md</Link>
					<Link to="/projekti" className="side_bar-link">Projekti.md</Link>
					<Link to="/događaji" className="side_bar-link">Događaji.md</Link>
				</nav>
		</div>
	 );
}

export default SideBar;
