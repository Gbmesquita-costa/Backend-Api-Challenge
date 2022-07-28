import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ProfileProps {
    slug: string;
    email: string;
    password: string
}

@injectable()
class UpdateProfileUseCase {
    constructor(
        @inject("UsersRepository")
        private profileRepository: IUsersRepository
    ) {}

    async execute({ slug, email, password }: ProfileProps): Promise<void> {
        const profile = await this.profileRepository.findById(slug)

        if (!profile) {
            throw new AppError("Slug does not exists!", 401)
        }

        const hashpassword = await hash(password, 8)

        Object.assign(profile, {
            email: email,
            password: hashpassword
        })

        await this.profileRepository.createUser(profile)
    }

}

export { UpdateProfileUseCase }