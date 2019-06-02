import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = { pics: [] }

	loadPics (search) { console.log(search) }
	
	render () {
		return (
			<div>
				<div>
						< GifList pics={this.state.pics}/>
				</div>
				<div>
					< GifSearch loadPics={this.loadPics} />
				</div>
			</div>
		)
	}
}

export default GifListContainer 

