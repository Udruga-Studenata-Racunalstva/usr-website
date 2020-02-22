import React from 'react'

import ActivityBar from './shared/ActivityBar'
import SideBar from './shared/SideBar'
import Panel from './shared/Panel'
import StatusBar from './shared/StatusBar'
import EditorArea from './EditorArea'

function App () {
  return (
		<div className="flex-column">
			<div class="flex-row flex-row--content">
				{/* Aside */}
				<ActivityBar />
				<SideBar />

				{/* Main */}
				<EditorArea />
				<Panel />
			</div>

			<div className="flex-row flex-row--footer">
				{/* Footer */}
				<StatusBar />
			</div>
		</div>
  )
}

export default App
