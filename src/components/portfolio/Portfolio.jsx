import React, { useState } from 'react'
import './portfolio.scss'
import list from '../../data'
import DisplayApp from './DisplayApp'
import Categories from './Categories'
const allCategories = ['all', ...new Set(list.map((item) => item.category))]

const Portfolio = () => {
	const [displayedApp, setDisplayedApp] = useState(list)
	const [selected, setSelected] = useState('all')

	const filterItems = (category) => {
		if (category === 'all') {
			setDisplayedApp(list)
			return
		}
		const newDisplayedApp = list.filter((item) => {
			return item.category === category
		})

		setDisplayedApp(newDisplayedApp)
	}

	return (
		<div className='portfolio' id='portfolio'>
			<h1>Portfolio</h1>
			<ul>
				{allCategories.map((category, index) => {
					return (
						<Categories
							key={index}
							category={category}
							filterItems={filterItems}
							active={selected === category}
							setSelected={setSelected}
						/>
					)
				})}
			</ul>
			<DisplayApp displayedApp={displayedApp} />
		</div>
	)
}

export default Portfolio
