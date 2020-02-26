import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as faExit} from '@fortawesome/free-solid-svg-icons'
import { faReact} from '@fortawesome/free-brands-svg-icons'

const EditorGroups = () => {
	return (
		<header>
			<nav id="nav" className="nav flex-row">
				<ul className="nav-list flex-row">
					<li className="nav-item">
						<FontAwesomeIcon className="nav-fa nav-fa--react" icon={faReact} />
						<Link to="/home" className="nav-link">Home.jsx</Link>
						<button className="nav-button">
							<FontAwesomeIcon className="nav-fa" icon={faExit} />
						</button>
					</li>
					<li className="nav-item">
						<FontAwesomeIcon className="nav-fa nav-fa--react" icon={faReact} />
						<Link to="/events" className="nav-link">Events.jsx</Link>
						<button className="nav-button">
							<FontAwesomeIcon className="nav-fa" icon={faExit} />
						</button>
					</li>
				</ul>
			</nav>
		</header>
	 );
}

export default EditorGroups;
