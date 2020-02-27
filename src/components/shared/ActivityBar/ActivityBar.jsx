import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as faExplorer} from '@fortawesome/free-regular-svg-icons'
import { faSearch, faCodeBranch as faSourceControl, faBug as faDebug, faPuzzlePiece as faExtensions, faCog as faSettings} from '@fortawesome/free-solid-svg-icons'

const ActivityBar = () => {

	const renderItem = (item, i) => {
		return (
			<li key={i} className={`aside-item` + (!!item.modifier ? ` aside-item--${item.modifier}` : "")}>
				<button className={`aside-button ` + (!!item.modifier ? ` aside-button--${item.modifier}` : "")}>
					<FontAwesomeIcon className="aside-fa" icon={item.icon} />
					<span className="aside-tooltip">{item.tooltip}</span>
				</button>
			</li>
		)
	}

	const items = [
		{icon: faExplorer, tooltip: "Explorer (Ctrl+Shift+E)"},
		{icon: faSearch, tooltip: "Search (Ctrl+Shift+F)"},
		{icon: faSourceControl, tooltip: "Source Control (Ctrl+Shift+G)"},
		{icon: faDebug, tooltip: "Run and Debug (Ctrl+Shift+D)"},
		{icon: faExtensions, tooltip: "Extensions (Ctrl+Shift+X)"},
		{icon: faSettings, tooltip: "Extensions (Ctrl+Shift+X)", modifier: "settings"},
	]

	return (
		<aside className="aside">
			<ul className="aside-list flex-column">
				{items.map(renderItem)}
			</ul>
		</aside>
	 );
}

export default ActivityBar;
