import { EntityRepository, Repository } from 'typeorm'
import { Company } from '../models/Company'
@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {}
