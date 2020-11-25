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

	public async getuser(req: Request, res: Response): Promise<Response> {
		const result: User[] | undefined = await getCustomRepository(UserRepository).getuser()
		if (result?.length > 0) {
			return res.status(200).json({
				responseBody: result,
				message: `success`,
				responseCode: 200,
			})
		} else {
			return res.status(200).json({
				responseBody: result,
				message: `fail`,
				responseCode: 401,
			})
		}
	}

	public async createUser(req: Request, res: Response): Promise<Response> {
		const user: User = req.body
		user.status = 1
		const result: User | undefined = await getCustomRepository(UserRepository).createUser(user)
		return res.status(200).json(result)
	}

	public async updateUser(req: Request, res: Response): Promise<Response> {
		const user: User = req.body

		const result: User | undefined = await getCustomRepository(UserRepository).updateuser(user)

		return res.status(200).json(result)
	}

	public async deleteuser(req: Request, res: Response): Promise<Response> {
		const user: User = req.body

		const result: User | undefined = await getCustomRepository(UserRepository).deleteuser(user)
		return res.status(200).json(result)
	}
}

export const userController = new UserController()
