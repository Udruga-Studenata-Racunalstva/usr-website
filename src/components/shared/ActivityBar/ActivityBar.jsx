import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as faExplorer} from '@fortawesome/free-regular-svg-icons'
import { faSearch, faCodeBranch as faSourceControl, faBug as faDebug, faPuzzlePiece as faExtensions, faCog as faSettings} from '@fortawesome/free-solid-svg-icons'

const ActivityBar = () => {
	return (
		<aside className="aside">
			<ul className="aside-list flex-column">
				<li className="aside-item">
					<button className="aside-button" autofocus="autofocus">
						<FontAwesomeIcon className="aside-fa" icon={faExplorer} />
					</button>
				</li>
				<li className="aside-item">
					<button className="aside-button">
						<FontAwesomeIcon className="aside-fa" icon={faSearch} />
					</button>
				</li>
				<li className="aside-item">
					<button className="aside-button">
						<FontAwesomeIcon className="aside-fa" icon={faSourceControl} />
					</button>
				</li>
				<li className="aside-item">
					<button className="aside-button">
						<FontAwesomeIcon className="aside-fa" icon={faDebug} />
					</button>
				</li>
				<li className="aside-item">
					<button className="aside-button">
						<FontAwesomeIcon className="aside-fa" icon={faExtensions} />
					</button>
				</li>
				<li className="aside-item aside-item--settings">
					<button className="aside-button aside-button--settings">
						<FontAwesomeIcon className="aside-fa" icon={faSettings} />
					</button>
				</li>
			</ul>
		</aside>
	 );
}

export default ActivityBar;
