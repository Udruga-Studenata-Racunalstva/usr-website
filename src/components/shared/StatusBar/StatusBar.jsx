import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch as faSourceControl} from '@fortawesome/free-solid-svg-icons'
import { faBell as faNotification, faThumbsUp} from '@fortawesome/free-regular-svg-icons'

const StatusBar = () => {
	return (
		<footer className="footer flex-row">
			<div className="flex-column">
				<span className="footer-span">
					<FontAwesomeIcon className="footer-fa" icon={faSourceControl} />develop-branch
				</span>
			</div>

			<div className="flex-column">
				<span className="footer-span footer-span--small">
					<small className="footer-small">USR - Registar udruga Republike Hrvatske broj 10932480923 od 21.6.2020. u Splitu. OIB: 63923092133</small>
				</span>
			</div>

			<div className="flex-column">
				<div className="flex-row">
					<span className="footer-span">
						<FontAwesomeIcon className="footer-fa" icon={faThumbsUp} />
					</span>

					<span className="footer-span">
						<FontAwesomeIcon className="footer-fa" icon={faNotification} />
					</span>
				</div>
			</div>
		</footer>
	 );
}

export default StatusBar;
