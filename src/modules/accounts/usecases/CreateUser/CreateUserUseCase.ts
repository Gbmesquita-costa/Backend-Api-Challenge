import { injectable, inject } from "tsyringe"
import { hash } from "bcryptjs"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { AppError } from "../../../../errors/AppError"

@injectable()
class CreateUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password, name }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError("User already exists!")
        }

        const hashpassword = await hash(password, 8)

        await this.usersRepository.createUser({
            email,
            name,
            password: hashpassword
        })
    }
}

export { CreateUseCase }