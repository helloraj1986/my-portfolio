import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped' // npm install ityped for TYPING effect

const Intro = () => {
	const textRef = useRef(null)

	//using useeffect for typing effect
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			bsckDelay: 1500,
			typeSpeed: 200,
			strings: ['Developer', 'Designer'],
		})
	}, [])

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='imgContainer'>
					<img src='assets/man.png' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hi There, I'm</h2>
					<h1>Rajeev Kumar Mohanty</h1>
					<h3>
						Web <span ref={textRef}></span>
					</h3>
				</div>
				<a href='#portfolio'>
					<img src='assets/down.png' alt='' />
				</a>
			</div>
		</div>
	)
}

export default Intro
