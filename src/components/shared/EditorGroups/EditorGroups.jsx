import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as faExit} from '@fortawesome/free-solid-svg-icons'
import { faReact} from '@fortawesome/free-brands-svg-icons'

const EditorGroups = () => {

	const renderItem = (item, i) => {
		return (
			<li key={i} className="nav-item">
				<FontAwesomeIcon className="nav-fa nav-fa--react" icon={item.icon} />
				<Link to={`/${item.name.toLowerCase()}`} className="nav-link">{item.name}.jsx</Link>
				<button className="nav-button">
					<FontAwesomeIcon className="nav-fa" icon={faExit} />
				</button>
			</li>
		)
	}

	const items = [
		{icon: faReact, name: 'Home'},
		{icon: faReact, name: 'Events'},
		{icon: faReact, name: 'Projects'},
	]

	return (
		<header>
			<nav id="nav" className="nav flex-row">
				<ul className="nav-list flex-row">
					{items.map(renderItem)}
				</ul>
			</nav>
		</header>
	)
}

export default EditorGroups
