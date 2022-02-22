import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Navbar from './components/Navbar/Navbar'
import hire from './pages/hire/hire'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './app.css'
import About from './pages/about/About'
import video from './images/video3.mp4'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
	breakpoints: {
		keys: ['xss', 'xs', 'sm', 'md', 'lg', 'xl'],
		values: { xss: 0, xs: 380, sm: 600, md: 960, lg: 1280, xl: 1920 },
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	)
}

export default App
