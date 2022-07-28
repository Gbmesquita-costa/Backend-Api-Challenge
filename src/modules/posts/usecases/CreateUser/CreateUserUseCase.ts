import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";
import { CreatePosts } from "../../dtos/IPostDTO"

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("PostsRepository")
        private postRepository: IPostsRepository 
    ) {}

    async execute({ post, posts_id }: CreatePosts): Promise<void> {
        await this.postRepository.CreatePosts({
            post: post,
            posts_id: posts_id
        })
    }
}

export { CreateUserUseCase }