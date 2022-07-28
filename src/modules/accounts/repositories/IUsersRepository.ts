import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../entities/user"

interface IUsersRepository {
    createUser({ email, password }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    SearchUser(search: any): Promise<User[]>
    getAllUsers(): Promise<User[]>
}

export { IUsersRepository }