import { inject, injectable } from "tsyringe";

import { FriendList } from "../../entities/friends";
import { IFriendsList } from "../../repositories/IFriendsList";


@injectable()
class FriendListUseCase {
    constructor(
        @inject("FriendsRepository")
        private friendRepository: IFriendsList
    ) {}

    async execute(): Promise<FriendList[]> {
        const all = await this.friendRepository.friendsList()
        return all
    }

}

export { FriendListUseCase }