import React from 'react'
import './topbar.scss'
import MailIcon from '@material-ui/icons/Mail'
import PersonIcon from '@material-ui/icons/Person'

const Topbar = ({ setMenuOpen, menuOpen }) => {
	return (
		<div className={`${menuOpen ? 'topbar active' : 'topbar'}`}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						genius.
					</a>
					<div className='itemContainer'>
						<PersonIcon className='icon' />
						<span> +91 9999999999</span>
					</div>
					<div className='itemContainer'>
						<MailIcon className='icon' />
						<span> rajeev.mohanty@live.com</span>
					</div>
				</div>
				<div className='right'>
					<div
						className='hamburger'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Topbar
