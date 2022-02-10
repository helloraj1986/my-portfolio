import React from 'react'

const DisplayApp = ({ displayedApp }) => {
	return (
		<div className='container'>
			{displayedApp.map((app) => {
				const { img, title, id } = app
				return (
					<div className='item' key={id}>
						<img src={img} alt='' />
						<h3>{title}</h3>
					</div>
				)
			})}
		</div>
	)
}

export default DisplayApp
