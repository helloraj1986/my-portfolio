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
import { Link } from 'react-router-dom'

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
				<div
					className='hero-con-left'
					style={!isShowing ? { flex: 12, width: '100%' } : null}
				>
					<div className='skill-btn' onClick={() => setIsShowing(!isShowing)}>
						{isShowing ? (
							// <VisibilityRoundedIcon style={{ fontSize: 50, color: 'red' }} />
							<LeftArrow />
						) : (
							<RightArrow />
						)}
					</div>
					<div className='introContainer'>
						<h1 style={!isShowing ? { fontSize: '56px' } : null}>
							RAJEEV KUMAR MOHANTY
						</h1>
						<Typewriter
							options={{
								strings: [
									'Welcome to my page.',
									'I am a Web Developer based in Sydney, AU.',
								],
								autoStart: true,
								loop: true,
								pauseFor: 1000,
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
								{/* <div className='intro'>
									<p>I am a Web Developer based in Sydney, AU.</p>
								</div> */}
								<p className='about-desc'>
									A professional with 13 years of expereinece in total who loves
									facing the customer and solving their problems. A self learned
									web developer who is loving the creativity which comes with it.
								</p>
								<p className='about-desc'>
									Please click&nbsp;
									<Link to='/about' className='bold'>
										here
									</Link>
									&nbsp;to know more about me.
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
									<h1>Skills</h1>
								</div>
								<div className='skill-con-wrapper'>
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
