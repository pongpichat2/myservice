import { Router } from 'express'
import { userController } from '../controllers/UserController'

const route = Router()
route.get('/', (req, res) => {
	res.render('welcome', {
		message: 'Welcome API',
	})
})
// User
route.get('/login', userController.login)
