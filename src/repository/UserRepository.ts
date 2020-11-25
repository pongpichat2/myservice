import { EntityRepository, getCustomRepository, Repository } from 'typeorm'
import { Company } from '../models/User'
@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
	public async findBuyerCompanyByBuyerId(companyId: number): Promise<Company | undefined> {
		const result = await getCustomRepository(CompanyRepository)
			.createQueryBuilder('company')
			.where('company.companyId =:company', {
				company: companyId,
			})
			.getOne()
		return result
	}
}
