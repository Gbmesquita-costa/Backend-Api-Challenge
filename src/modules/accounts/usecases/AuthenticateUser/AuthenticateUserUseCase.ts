import { inject, injectable } from "tsyringe"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { AppError } from "../../../../errors/AppError"

interface TokenResponse {
    token: string;
    user: {
        email: string
    }
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: ICreateUserDTO): Promise<TokenResponse> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password incorrect")
        }

        const comparepassword = await compare(password, user.password)

        if (!comparepassword) {
            throw new AppError("Email or password incorrect")
        }

        const token = sign({}, process.env.JWT, {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenreturn: TokenResponse = {
            token,
            user: {
                email: user.email
            }
        }

        return tokenreturn
    }
}

export { AuthenticateUserUseCase }