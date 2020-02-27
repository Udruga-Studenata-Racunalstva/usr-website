import React from 'react'

import EditorGroups from './shared/EditorGroups'
import Panel from './shared/Panel'
import Pages from './pages'

const EditorArea = () => {
	return (
		<div className="flex-column flex-column--content">
			<EditorGroups />
      <Pages />
			<Panel />
		</div>
	 );
}

export default EditorArea;
