import { getRepository, Repository } from "typeorm"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { User } from "../../entities/user"
import { IUsersRepository } from "../IUsersRepository"

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }
    
    async createUser({ email, password, avatar, id, name }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            email,
            name,
            password,
            avatar,
            id
        })
        
        await this.repository.save(user)
    }
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email: email })
        return user
    }
    
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id: id })
        return user
    }

    async SearchUser(search: any): Promise<User[]> {
        const formattedData = await search.toLowerCase()

        const searchuser = (await this.repository.find({})).filter((user) => {
            return user.name.toLowerCase().includes(formattedData)
        })

        return searchuser
    }

    async getAllUsers(): Promise<User[]> {
        const all = await this.repository.find()
        return all
    }

}

export { UsersRepository }