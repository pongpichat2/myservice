import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn({ name: 'userId' })
	public userId: number

	@Column({ name: 'username', type: 'varchar' })
	public username: string

	@Column({ name: 'password', type: 'varchar' })
	public password: string

	@Column({ name: 'status', type: 'int' })
	public status: number
}
