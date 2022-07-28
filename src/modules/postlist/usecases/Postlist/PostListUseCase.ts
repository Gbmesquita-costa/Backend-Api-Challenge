import { inject, injectable } from "tsyringe";

import { PostEntity } from "../../entities/PostEntity";
import { IPostDetails } from "../../repositories/IPostDetails";

@injectable()
class PostListUseCase {
    constructor(
        @inject("DetailRepository")
        private repositoryList: IPostDetails
    ) {}

    async execute(): Promise<PostEntity[]> {
        const all = await this.repositoryList.postList()
        return all
    }
}

export { PostListUseCase }