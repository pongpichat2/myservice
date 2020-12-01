import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Company } from '../models/Company'
import { CompanyRepository } from '../repository/CompanyRepository'

@Advised()
class CompanyController {
	public async companyUser(req: Request, res: Response): Promise<Response> {
		const companyName: Company = req.body
		// console.log(companyName.companyName)
		const result = await getCustomRepository(CompanyRepository).companyUser(companyName)
		return res.status(200).json({
			responseBody: result,
		})
	}
}

export const companyController = new CompanyController()
