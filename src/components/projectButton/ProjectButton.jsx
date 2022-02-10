import React from 'react'
import { Link } from 'react-router-dom'
import './projectButton.css'

const ProjectButton = ({ webAdd, send }) => {
	return (
		<a target='/' href={webAdd} className='card-text'>
			<button className='bubbly-button' style={{ width: send ? '100px' : '100px' }}>
				{send ? send : 'VISIT ME'}
			</button>
		</a>
	)
}

export default ProjectButton
