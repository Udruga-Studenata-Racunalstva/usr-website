import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as faExplorer} from '@fortawesome/free-regular-svg-icons'
import { faSearch, faCodeBranch as faSourceControl, faBug as faDebug, faPuzzlePiece as faExtensions, faCog as faSettings} from '@fortawesome/free-solid-svg-icons'

const ActivityBar = () => {
	return (
		<ul className="activity_bar">
			<li className="activity_bar-item"><FontAwesomeIcon icon={faExplorer} /></li>
			<li className="activity_bar-item"><FontAwesomeIcon icon={faSearch} /></li>
			<li className="activity_bar-item"><FontAwesomeIcon icon={faSourceControl} /></li>
			<li className="activity_bar-item"><FontAwesomeIcon icon={faDebug} /></li>
			<li className="activity_bar-item"><FontAwesomeIcon icon={faExtensions} /></li>
			<li className="activity_bar-item activity_bar-item--settings"><FontAwesomeIcon icon={faSettings} /></li>
		</ul>
	 );
}

export default ActivityBar;
