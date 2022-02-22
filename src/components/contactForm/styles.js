import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	contactContainer: {
		width: '800px',
		padding: '0px 30px',
		margin: '40px auto',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '380px',
			margin: '40px auto',
		},
	},
	card: {
		padding: '10px 10px',
		height: '550px',
		background: '#edf2f4',
		opacity: '0.8',
		boxShadow: '3px 3px 5px -3px #EDF2F4',
		[theme.breakpoints.between('xs', 'sm')]: {
			height: '650px',
		},
		[theme.breakpoints.between('0px', '380px')]: {
			height: '620px',
			padding: '5px 5px',
		},
	},
	item: {
		margin: '5px 5px',
	},
	textField: {
		padding: theme.spacing(1),
		textAlign: 'center',
		fontSize: '20px',
		color: theme.palette.text.secondary,
		[theme.breakpoints.between('0px', '380px')]: {
			fontSize: '16px',
		},
	},
	confDisplayWrapper: {
		height: '80vh',
		width: '80vw',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		background: '#242323',
		height: '250px',
		width: '500px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		margin: '0 50px',
		fontFamily: 'Jost, sans-serif',
	},
}))
