import { inject, injectable } from "tsyringe";
import { Posts } from "../../entities/post";
import { IPostsRepository } from "../../repositories/IPostsRepository";

@injectable()
class ViewMyPostUseCase {
    constructor(
        @inject("PostsRepository")
        private viewRepository: IPostsRepository
    ) {}

    async execute(): Promise<Posts[]> {
        const posts = await this.viewRepository.ViewMyPosts()
        return posts
    }
}

export { ViewMyPostUseCase }