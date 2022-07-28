import { inject, injectable } from "tsyringe";
import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class SearchUserUseCase {
    constructor(
        @inject("UsersRepository")
        private respository: IUsersRepository
    ) {}

    async execute(search: any): Promise<User[]> {
        const searchUser = await this.respository.SearchUser(search)
        return searchUser
    }
}

export { SearchUserUseCase }