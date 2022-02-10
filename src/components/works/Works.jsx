import React, { useState } from 'react'
import './works.scss'
import { workData } from '../../data'

const Works = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const handleClick = (way) => {
		way === 'left'
			? currentSlide === 0
				? setCurrentSlide(workData.length - 1)
				: setCurrentSlide(currentSlide - 1)
			: currentSlide === workData.length - 1
			? setCurrentSlide(0)
			: setCurrentSlide(currentSlide + 1)
	}

	return (
		<div className='works' id='works'>
			<div
				className='slider'
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{workData.map((item) => {
					return (
						<div className='container' key={item.id}>
							<div className='item'>
								<div className='left'>
									<div className='leftContainer'>
										<div className='imgContainer'>
											<img src={item.icon} alt='' />
										</div>
										<h2>{item.title}</h2>
										<p>{item.desc}}</p>
										<span>projects</span>
									</div>
								</div>
								<div className='right'>
									<img src={item.img} alt='' />
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<img
				src='assets/arrow.png'
				className={`${
					currentSlide === 0 ? 'arrow left hidden' : 'arrow left'
				}`}
				alt=''
				onClick={() => handleClick('left')}
			/>
			<img
				src='assets/arrow.png'
				className={`${
					currentSlide === workData.length - 1
						? 'arrow right hidden'
						: 'arrow right'
				}`}
				alt=''
				onClick={() => handleClick()}
			/>
		</div>
	)
}

export default Works
