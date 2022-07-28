import { getRepository, Repository } from "typeorm"

import { Posts } from "../../entities/post"
import { IPostsRepository } from "../IPostsRepository";
import { CreatePosts } from "../../dtos/IPostDTO";

class PostsRepository implements IPostsRepository {
    private repository: Repository<Posts>

    constructor() {
        this.repository = getRepository(Posts)
    }

    async CreatePosts({ id, post, posts_id }: CreatePosts): Promise<void> {
        const create = this.repository.create({
            id: id,
            post: post,
            posts_id: posts_id
        })

        await this.repository.save(create)
    }

    async ViewMyPosts(): Promise<Posts[]> {
        const post = this.repository.find({})
        return post
    }
}

export { PostsRepository }