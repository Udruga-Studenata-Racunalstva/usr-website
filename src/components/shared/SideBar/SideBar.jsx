import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown as faCaretDown, faAngleRight as faCaretRight} from '@fortawesome/free-solid-svg-icons'
// import { faReact} from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
	return (
		<nav id="sidenav" className="sidenav flex-column">
			<h2 className="sidenav-title">EXPLORER</h2>

			<h2 className="sidenav-title sidenav-title--main">USR-WEBSITE</h2>

			<ul className="sidenav-list">
				<li className="sidenav-item">
					<button className="sidenav-button">
						<FontAwesomeIcon className="sidenav-fa" icon={faCaretRight} />
						<span>Home</span>
					</button>
				</li>
				<li className="sidenav-item">
					<button className="sidenav-button">
						<FontAwesomeIcon className="sidenav-fa" icon={faCaretRight} />
						<span>News</span>
					</button>
				</li>
				<li className="sidenav-item">
					<button className="sidenav-button">
						<FontAwesomeIcon className="sidenav-fa" icon={faCaretRight} />
						<span>Projects</span>
					</button>
				</li>
				<li className="sidenav-item">
					<button className="sidenav-button">
						<FontAwesomeIcon className="sidenav-fa" icon={faCaretRight} />
						<span>Events</span>
					</button>
				</li>
			</ul>
		</nav>
	 );
}

export default SideBar;
