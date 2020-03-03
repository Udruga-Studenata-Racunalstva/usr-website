import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as faExit } from '@fortawesome/free-solid-svg-icons'

const Panel = () => {

	// const outputLines = [
	// 	"USR Terminal",
	// 	"Copyright (C) Udruga Studenata Racunarstva. No rights reserved.",
	// 	"",
	// 	"Try typing 'help' to list available commands.",
	// 	"",
	// ]

	return (
		<div id="panel" className="panel">
			<div className="flex-row">
				<span className="panel-span">Terminal</span>
				<FontAwesomeIcon className="panel-fa" icon={faExit} />
			</div>
			<div className="flex-row">
				<kbd className="panel-kbd"></kbd>
			</div>
		</div>
	)
}

export default Panel
