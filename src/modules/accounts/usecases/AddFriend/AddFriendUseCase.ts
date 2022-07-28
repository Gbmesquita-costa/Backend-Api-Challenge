import { inject, injectable } from "tsyringe";

import { IAddFriendDTO } from "../../dtos/IAddFriendDTO";
import { IFriendsList } from "../../repositories/IFriendsList";

@injectable()
class AddFriendUseCase {
    constructor(
        @inject("FriendsRepository")
        private repository: IFriendsList
    ) {}

    async execute({ email, avatar, name, friend_id }: IAddFriendDTO): Promise<void> {
        await this.repository.addTofriendList({
           friend_id: friend_id,
           avatar: avatar,
           email: email,
           name: name
        })
    }
}

export { AddFriendUseCase }