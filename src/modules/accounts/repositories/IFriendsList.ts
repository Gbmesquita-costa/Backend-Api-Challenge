import { IAddFriendDTO } from "../dtos/IAddFriendDTO";
import { FriendList } from "../entities/friends";

interface IFriendsList {
    addTofriendList({ email, avatar, name, friend_id }: IAddFriendDTO): Promise<void>
    friendsList(): Promise<FriendList[]>
}

export { IFriendsList }