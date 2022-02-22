import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	contactContainer: {
		width: '700px',
		margin: '20px auto',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '330px',
			margin: '30px auto',
		},
	},
	card: {
		padding: '5px 5px',
		height: '650px',
		background: '#edf2f4',
		opacity: '0.8',
		boxShadow: '3px 3px 5px -3px #EDF2F4',
		[theme.breakpoints.down('sm')]: {
			height: '560px',
			padding: 0,
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
