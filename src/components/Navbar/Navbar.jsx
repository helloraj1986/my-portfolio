import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/RKM.gif'
import './navbar.css'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='nav-container'>
				<div className='nav-con-left'>
					<Link to='/'>
						<img src={image} alt='' />
					</Link>
				</div>
				<div className='nav-con-right'>
					<span>
						<Link to='/home' className='link'>
							Home
						</Link>
					</span>
					<span>
						<Link to='/about' className='link'>
							About
						</Link>
					</span>
					<span>
						<Link to='/projects' className='link'>
							Projects
						</Link>
					</span>
					<span>
						<Link to='/hireme' className='link'>
							Hire Me
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar
