import { Advised } from 'aspect.js'

@Advised()
class CompanyController {}

export const companyController = new CompanyController()
