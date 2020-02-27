import React from 'react'

import ActivityBar from './shared/ActivityBar'
import SideBar from './shared/SideBar'
import StatusBar from './shared/StatusBar'
import EditorArea from './EditorArea'

function App () {
  return (
		<div className="flex-column">
			<div className="flex-row flex-row--body">
				{/* Sidebar */}
				<ActivityBar />
				<SideBar />

				{/* Main */}
				<EditorArea />
			</div>

			<div className="flex-row flex-row--footer">
				{/* Footer */}
				<StatusBar />
			</div>
		</div>
  )
}

export default App
