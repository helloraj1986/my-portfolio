import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Navbar from './components/Navbar/Navbar'
import hire from './pages/hire/hire'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './app.css'
import About from './pages/about/About'
import video from './images/video3.mp4'

const App = () => {
	return (
		<BrowserRouter>
			{/* testing */}
			<div className='video-overlay'></div>
			<video id='background-video' autoPlay loop muted>
				<source src={video} type='video/mp4' />
			</video>

			{/* testing */}

			<div className='mainContainer'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={() => <Redirect to='/home' />} />
					<Route path='/home' exact component={Home} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/about' exact component={About} />
					<Route path='/hireme' exact component={hire} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
