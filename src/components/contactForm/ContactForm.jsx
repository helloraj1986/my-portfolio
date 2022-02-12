import React, { useState } from 'react'
import {
	Typography,
	Card,
	CardContent,
	Grid,
	TextField,
	Button,
	Paper,
	Container,
} from '@material-ui/core'
import emailjs from 'emailjs-com'
import SendIcon from '@material-ui/icons/Send'
//
import useStyles from './styles'
import { CropLandscapeOutlined } from '@material-ui/icons'
import ProjectButton from '../projectButton/ProjectButton'

const ContactForm = () => {
	const styles = useStyles()
	const [confDisplay, setConfDisplay] = useState(false)

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	})

	const sendMessage = (e) => {
		e.preventDefault()
		emailjs
			.sendForm('service_ga8p3qe', 'template_k93kldg', e.target, 'user_ys8zoDNsETfDDKbOEtn6a')
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
		setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
		setConfDisplay(true)
	}
	return !confDisplay ? (
		<div className={styles.contactContainer}>
			<Card className={styles.card}>
				<Typography
					variant='h3'
					color='textSecondary'
					align='center'
					gutterBottom
					className=''
					style={{
						fontFamily: 'Jost, sans-serif',
						marginTop: '20px',
						color: '#000814',
						fontWeight: 600,
					}}
				>
					Leave a Message
				</Typography>
				<CardContent>
					<form action='' onSubmit={sendMessage} size='medium' autoComplete='off'>
						<Grid container spacing={1}>
							<Grid Item xs={12} sm={6}>
								<TextField
									id=''
									name='firstName'
									value={formData.firstName}
									label='First Name'
									variant='outlined'
									fullWidth
									className={styles.textField}
									onChange={(e) =>
										setFormData({ ...formData, firstName: e.target.value })
									}
									required
								/>
							</Grid>
							<Grid Item xs={12} sm={6}>
								<TextField
									id=''
									name='lastName'
									value={formData.lastName}
									label='Last Name'
									variant='outlined'
									fullWidth
									className={styles.textField}
									required
									onChange={(e) =>
										setFormData({ ...formData, lastName: e.target.value })
									}
								/>
							</Grid>
							<Grid Item xs={12}>
								<TextField
									id=''
									type='email'
									name='email'
									value={formData.email}
									label='Email'
									variant='outlined'
									fullWidth
									className={styles.textField}
									required
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
								/>
							</Grid>
							<Grid Item xs={12}>
								<TextField
									id=''
									type='number'
									label='Phone'
									name='phone'
									value={formData.phone}
									fullWidth
									variant='outlined'
									className={styles.textField}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
								/>
							</Grid>
							<Grid Item xs={12}>
								<TextField
									id=''
									label='Message'
									name='message'
									value={formData.message}
									fullWidth
									variant='outlined'
									multiline
									rows={10}
									className={styles.textField}
									required
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
								/>
							</Grid>
							<Grid Item xs={12}>
								<ProjectButton send={'SEND'} />
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</div>
	) : (
		<div className={styles.confDisplayWrapper}>
			<div className={styles.container}>
				<h2 className={styles.text}>
					ThankYou for your message!! I will get back to you as soon as possible.
				</h2>
			</div>
		</div>
	)
}

export default ContactForm
