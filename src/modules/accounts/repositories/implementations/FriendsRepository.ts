import { getRepository, Repository } from "typeorm"
import { IAddFriendDTO } from "../../dtos/IAddFriendDTO"

import { FriendList } from "../../entities/friends"
import { IFriendsList } from "../IFriendsList"

class FriendsRepository implements IFriendsList {
    private repository: Repository<FriendList>

    constructor() {
        this.repository = getRepository(FriendList)
    }

    async addTofriendList({ email, avatar, name, friend_id }: IAddFriendDTO): Promise<void> {
        const add = this.repository.create({
            name: name,
            email: email,
            avatar: avatar,
            friend_id: friend_id
        })

        await this.repository.save(add)
    }

    async friendsList(): Promise<FriendList[]> {
        const all = await this.repository.find()
        return all
    }
}

export { FriendsRepository }