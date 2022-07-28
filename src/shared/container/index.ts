import { container } from "tsyringe"

import { IFriendsList } from "../../modules/accounts/repositories/IFriendsList"
import { FriendsRepository } from "../../modules/accounts/repositories/implementations/FriendsRepository"

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { PostDetails } from "../../modules/postlist/repositories/implementations/PostDetails"
import { IPostDetails } from "../../modules/postlist/repositories/IPostDetails"
import { PostsRepository } from "../../modules/posts/repositories/implementations/PostsRepository"
import { IPostsRepository } from "../../modules/posts/repositories/IPostsRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IFriendsList>(
    "FriendsRepository",
    FriendsRepository
)

container.registerSingleton<IPostsRepository>(
    "PostsRepository",
    PostsRepository
)

container.registerSingleton<IPostDetails>(
    "DetailRepository",
    PostDetails
)