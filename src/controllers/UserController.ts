import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { User } from '../models/User'

@Advised()
class UserController {
	public async login(req: Request, res: Response): Promise<Response> {
		const user: User = req.body

		return res.status(200).json({
			message: `login success`,
			responseCode: 200,
		})
	}
}

export const userController = new UserController()
