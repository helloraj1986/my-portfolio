import { Divider } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
	return (
		<div className='aboutWrapper'>
			<div className='container'>
				<h1 className='title'>About Me</h1>
				<hr className='divider' />
				<p className='desc'>
					I did my engineering (B.Tech) from Biju Patnaik University of Technology, Orissa
					with Applied Electronics and Instrumentation Engineering.
				</p>
				<p className='desc'>
					Before starting my journey as a web developer, I was with SIEMENS ENERGY for 13
					years and working in Industrial Automation Sector mostly in OIL & GAS and
					UTILITIES and always at the forefront of the customer.I loved my job but there
					was always a creative side of me which was looking for more.So I started looking
					towards web developement.As it could have satisfied both my interest facing the
					customer and creativity at the same time.I have started self learning since end
					of 2019.
				</p>
				<p className='desc'>
					Starting with plain HTML , CSS then moving on to JAVASCRIPT and now REACT.I have
					learned all these technologies through online courses from UDEMY, building
					websites on my own watching countless youtube videos and going through numerous
					medium articles.Also STACK OVERFLOW is always a friend.I love the feeling when a
					webpage comes to a form slowly once you start building and you can see it on
					your browser the creation of yours slwoly being created through the magic of
					your code.
				</p>
				<p className='desc'>
					I am still learning every minute during this incredible journey and looking for
					the opportunities where I can put my knowledge to good use and also learn and
					flourish with the people I am working with.
				</p>
				<p className='desc bold'>
					To see My latest projects please go&nbsp;
					<Link to='/projects' className='bold'>
						here.
					</Link>
				</p>
				<p className='desc bold'>
					Get my resume from&nbsp;
					<a
						className='desc bold'
						target='/'
						href='https://drive.google.com/file/d/0Byj7m5MVva8wVjhZZkVwZDM5dlg4NVJYc2JzN2F4WURocmc0/view?usp=sharing&resourcekey=0-XetX2ukllXeGGNTokdNDDg'
					>
						here.
					</a>
				</p>
			</div>
		</div>
	)
}

export default About
