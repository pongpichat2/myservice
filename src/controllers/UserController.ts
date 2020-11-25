import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { User } from '../models/User'
import { UserRepository } from '../repository/UserRepository'

@Advised()
class UserController {
	public async login(req: Request, res: Response): Promise<Response> {
		const user: User = req.body

		const result = await getCustomRepository(UserRepository).login(user)
		if (result) {
			return res.status(200).json({
				responseBody: result,
				message: `login success`,
				responseCode: 200,
			})
		} else {
			return res.status(200).json({
				responseBody: result,
				message: `login fail`,
				responseCode: 401,
			})
		}
	}
}

export const userController = new UserController()
