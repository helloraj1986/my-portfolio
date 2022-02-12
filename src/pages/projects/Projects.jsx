import React, { useState, useEffect } from 'react'
//react-router
import { useHistory, Link, useLocation } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
//
import './projects.scss'
import project1 from '../../images/project1_1.jpg'
import project2 from '../../images/project2.jpg'
import project3 from '../../images/project3.jpg'
//
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
//
//slider
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ProjectButton from '../../components/projectButton/ProjectButton'
//data
const projectList = [
	{
		id: 1,
		name: 'urbanCART',
		image: project1,
		desc: "A full fledged shopping app.I have used HTML, CSS, REACT, REDUX for the front end and Material UI for the styling.The data in the website is coming from fakestore api.The link is 'https://fakestoreapi.com/docs'.Click the 'VISIT ME' to see the actual website.",
		webAdd: 'https://urbancart.netlify.app/',
		githubLink: 'https://github.com/helloraj1986/urbanHat-app',
	},
	{
		id: 2,
		name: 'ScrapBook',
		image: project2,
		desc: 'A fun app for adding, editing and liking memories bu user.I have used HTML, CSS, REACT,REDUX and MATERIAL-UI to build the app',
		webAdd: 'https://scrapbook2021.netlify.app',
		githubLink: 'https://github.com/helloraj1986/scrapbook-part1-3',
	},
	{
		id: 3,
		name: 'netflixclone',
		image: project3,
		desc: 'This is the clone of NETFLIX. I have used HTML, CSS , SCSS and REACT to build this website.',
		webAdd: 'https://clonenetflix2022.netlify.app',
		githubLink: '/https://github.com/helloraj1986',
	},
]

const Projects = () => {
	const [index, setIndex] = useState(0)
	const [projects, setProjects] = useState(projectList)

	useEffect(() => {
		if (index > projects.length - 1) {
			setIndex(0)
		}
		if (index < 0) {
			setIndex(projects.length - 1)
		}
	}, [index])

	return (
		<section className='card-wrapper'>
			{projects.map((project, projectIndex) => {
				const { id, name, image, desc, webAdd, githubLink } = project
				let position = 'nextSlide'
				if (projectIndex === index) {
					position = 'activeSlide'
				}
				if (
					projectIndex === index - 1 ||
					(index === 0 && projectIndex === projects.length - 1)
				) {
					position = 'lastSlide'
				}
				return (
					<>
						<article
							className={`projects-card ${position}`}
							key={id}
							component={Link}
							to={webAdd}
						>
							<img src={image} alt='' className='img' />
							<div className='card-body'>
								<div className='card-title'>{name}</div>
								<div className='card-desc'>{desc}</div>
								<div className='btn-container'>
									<ProjectButton webAdd={webAdd} />
									<div className='git-container'>
										<a href={githubLink}>
											<AiFillGithub className='git-icon' />
										</a>
										<p className='tooltip'>visit to see the scource code</p>
									</div>
								</div>
							</div>
						</article>
					</>
				)
			})}

			<button className='prev' onClick={() => setIndex(index - 1)}>
				<ArrowBackIosRoundedIcon fontSize='inherit' style={{ color: '#ef233c' }} />
			</button>
			<button className='next' onClick={() => setIndex(index + 1)}>
				<ArrowForwardIosRoundedIcon fontSize='inherit' style={{ color: '#ef233c' }} />
			</button>
		</section>
	)
}

export default Projects
