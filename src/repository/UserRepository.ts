import { EntityRepository, getCustomRepository, Repository } from 'typeorm'
import { User } from '../models/User'
@EntityRepository(User)
export class UserRepository extends Repository<User> {
	public async login(user: User): Promise<User | undefined> {
		const result = await getCustomRepository(UserRepository)
			.createQueryBuilder('user')

			.where('user.username =:username and user.password =:password', {
				username: user.username,
				password: user.password,
			})
			.getOne()

		return result
	}

	public async getuser(): Promise<User[] | undefined> {
		const result = await getCustomRepository(UserRepository)
			.createQueryBuilder('user')
			.where('user.status =:status', {
				status: 2,
			})
			.getMany()

		return result
	}

	public async createUser(user: User): Promise<User | undefined> {
		const checkdata = await getCustomRepository(UserRepository)
			.createQueryBuilder('user')

			.where('user.username =:username and user.password =:password', {
				username: user.username,
				password: user.password,
			})
			.getOne()

		const result = await getCustomRepository(UserRepository).save(user)
		return result
	}

	public async updateuser(user: User): Promise<User | undefined> {
		const result = await getCustomRepository(UserRepository).save(user)
		return result
	}

	public async deleteuser(user: User): Promise<User | undefined> {
		const result = await getCustomRepository(UserRepository).remove(user)
		return result
	}
}
