const Categories = ({ category, filterItems, active, setSelected }) => {
	const filterAndSelect = (category) => {
		filterItems(category)
		setSelected(category)
	}

	return (
		<li
			className={active ? 'portfolioList active' : 'portfolioList'}
			onClick={() => filterAndSelect(category)}
		>
			{category}
		</li>
	)
}

export default Categories
