import { inject, injectable } from "tsyringe";
import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListAllProfilesUseCase {
    constructor(
        @inject("UsersRepository")
        private profilesRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        const all = await this.profilesRepository.getAllUsers()
        return all
    }
}

export { ListAllProfilesUseCase }