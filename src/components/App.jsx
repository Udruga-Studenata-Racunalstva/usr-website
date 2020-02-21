import React from 'react'

import ActivityBar from './shared/ActivityBar'
import SideBar from './shared/SideBar'
import Panel from './shared/Panel'
import StatusBar from './shared/StatusBar'
import EditorArea from './EditorArea'

function App () {
  return (
    <div>
			{/* Aside */}
      <ActivityBar />
      <SideBar />

			{/* Main */}
			<EditorArea />
      <Panel />

			{/* Footer */}
      <StatusBar />
    </div>
  )
}

export default App
