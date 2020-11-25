import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Company } from '../models/Company'
import { CompanyRepository } from '../repository/CompanyRepository'

@Advised()
class CompanyController {
	public async companyUser(req: Request, res: Response): Promise<Response> {
		const company: Company = req.body
		console.log(company)
		const result = await getCustomRepository(CompanyRepository).companyUser(company)
		return res.status(200).json({
			responseBody: result,
		})

		// if (result) {
		// 	return res.status(200).json({
		// 		responseBody: result,
		// 		message: `login success`,
		// 		responseCode: 200,
		// 	})
		// } else {
		// 	return res.status(200).json({
		// 		responseBody: result,
		// 		message: `login fail`,
		// 		responseCode: 401,
		// 	})
		// }
	}
}

export const companyController = new CompanyController()
