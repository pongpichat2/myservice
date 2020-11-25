import { Router } from 'express'
import { userController } from '../controllers/UserController'
import auth from '../middlewares/auth'
import authen from '../middlewares/authen'

const route = Router()
route.use(authen)
route.use(auth)
route.get('/hello', (req, res) => {
	res.render('welcome', {
		message: 'Welcome API',
	})
})
// User
route.post('/login', userController.login)
