import { CreatePosts } from "../dtos/IPostDTO"
import { Posts } from "../entities/post"

interface IPostsRepository {
    CreatePosts({ id, post, posts_id }: CreatePosts): Promise<void>
    ViewMyPosts(): Promise<Posts[]>
}

export { IPostsRepository }