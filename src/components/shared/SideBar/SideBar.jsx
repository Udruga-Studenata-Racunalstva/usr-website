import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown as faCaretDown, faAngleRight as faCaretRight} from '@fortawesome/free-solid-svg-icons'
// import { faReact} from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {

	const renderItem = (item) => {
		return (
			<li className="sidenav-item">
				<button className="sidenav-button">
					<FontAwesomeIcon className="sidenav-fa" icon={item.icon} />
					<span>{item.name}</span>
				</button>
			</li>
		)
	}

	const items = [
		{icon: faCaretRight, name: "Home"},
		{icon: faCaretRight, name: "News"},
		{icon: faCaretRight, name: "Projects"},
		{icon: faCaretRight, name: "Events"},
	]

	return (
		<nav id="sidenav" className="sidenav flex-column">
			<h2 className="sidenav-title">EXPLORER</h2>

			<h2 className="sidenav-title sidenav-title--main">USR-WEBSITE</h2>

			<ul className="sidenav-list">
				{items.map(renderItem)}
			</ul>
		</nav>
	 );
}

export default SideBar;
