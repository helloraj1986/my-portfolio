import React from 'react'
import './testimonials.scss'
import { cardData } from '../../data'

const Testimonials = () => {
	return (
		<div className='testimonials' id='testimonials'>
			<h1>Testimonials</h1>
			<div className='container'>
				{cardData.map((item, index) => {
					return (
						<div
							className={item.featured ? 'card featured' : 'card'}
							key={item.id}
						>
							<div className='top'>
								<img
									src='assets/right-arrow.png'
									alt=''
									className='left'
								/>
								<img src={item.img} alt='' className='user' />
								<img src={item.icon} alt='' className='right' />
							</div>
							<div className='center'>{item.desc}</div>
							<div className='bottom'>
								<h3>{item.name}</h3>
								<h4>{item.title}</h4>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Testimonials
