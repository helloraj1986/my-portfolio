import { useState } from 'react'
import './hero.css'
import image from '../../images/profile2_ori.jpg'
import Typewriter from 'typewriter-effect'
//
// import LogoHTML from '../svg/LogoHTML'
import logoHtml from '../../images/html5.svg'
import logoCss from '../../images/css5.svg'
import logoJs from '../../images/js.svg'
import logoSass from '../../images/sass.svg'
import logoMUI from '../../images/mui.svg'
import logoReact from '../../images/react.svg'

//
import { Motion, spring } from 'react-motion'
import LeftArrow from '../leftArrow/LeftArrow'
import RightArrow from '../rightArrow/RightArrow'

const Hero = () => {
	const [isShowing, setIsShowing] = useState(false)

	const skillsText = [
		{ skill: 'HTML', logo: logoHtml },
		{ skill: 'CSS', logo: logoCss },
		{ skill: 'JS', logo: logoJs },
		{ skill: 'SASS', logo: logoSass },
		{ skill: 'REACT', logo: logoReact },
		{ skill: 'Material UI', logo: logoMUI },
	]
	return (
		<div className='hero'>
			<div className='hero-container'>
				<div className='hero-con-left'>
					<div className='skill-btn' onClick={() => setIsShowing(!isShowing)}>
						{isShowing ? (
							// <VisibilityRoundedIcon style={{ fontSize: 50, color: 'red' }} />
							<LeftArrow />
						) : (
							<RightArrow />
						)}
					</div>
					<div className='introContainer'>
						<h1>Hello and Namaste,</h1>
						<Typewriter
							options={{
								strings: [
									'My name is Rajeev Kumar Mohanty.',
									'Welcome To my page.',
								],
								autoStart: true,
								loop: true,
								pauseFor: 2000,
								wrapperClassName: 'typewriter',
								cursorClassName: 'typewriter',
							}}
						/>
					</div>

					<Motion
						defaultStyle={{ opacity: 0 }}
						style={{
							opacity: spring(isShowing ? 1 : 0, { stiffness: 90 }),
						}}
					>
						{(style) => (
							<div style={{ opacity: style.opacity }}>
								<div className='intro'>
									<p>I am a Web Developer based in Sydney, AU.</p>
									<p>
										Exploring my creativity through innovative web deisgn
										standarrds...
									</p>
								</div>

								<p className='skill'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Asperiores corrupti aperiam labore nobis quidem, dicta
									recusandae tempora earum alias, iusto vel ipsam eligendi vero
									illum!
								</p>
							</div>
						)}
					</Motion>
				</div>
				<div className='hero-con-center'>
					<Motion
						defaultStyle={{ x: -200, opacity: 0 }}
						style={{
							x: spring(isShowing ? 0 : -200, { stiffness: 60, damping: 5 }),
							opacity: spring(isShowing ? 1 : 0),
						}}
					>
						{(style) => (
							<div
								style={{
									transform: `translateX(${style.x}px)`,
									opacity: style.opacity,
								}}
							>
								<div className='skill-title'>
									<h1>Tech i have used :-</h1>
									<hr className='divider' />
								</div>
								{skillsText.map((s) => {
									return (
										<>
											<div className='skills-con'>
												<h2>{s.skill}</h2>
												<div className='svgLogo'>
													<img src={s.logo} alt='' />
												</div>
											</div>
										</>
									)
								})}
							</div>
						)}
					</Motion>
				</div>

				<Motion
					defaultStyle={{ x: -200, opacity: 0 }}
					style={{
						x: spring(isShowing ? 0 : -200, { stiffness: 60, damping: 5 }),
						opacity: spring(isShowing ? 1 : 0),
					}}
				>
					{(style) => (
						<div
							className='hero-con-right'
							style={{
								transform: `translateX(${style.x}px)`,
								opacity: style.opacity,
							}}
						>
							<div className='hero-img-con'>
								<img src={image} alt='' className='profile-img' />
								<div className='overlay-bg-bot'></div>
								<div className='overlay-bg-top'></div>
							</div>
						</div>
					)}
				</Motion>
			</div>
		</div>
	)
}

export default Hero
