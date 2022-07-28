import { inject, injectable } from "tsyringe";
import { IPostDetailsDTO } from "../../dtos/IPostDetailsDTO";
import { IPostDetails } from "../../repositories/IPostDetails";

@injectable()
class PostDetailsUseCase {
    constructor(
        @inject("DetailRepository")
        private postDetail: IPostDetails
    ) {}

    async execute({ detail, postdetails_id }: IPostDetailsDTO): Promise<void> {
        await this.postDetail.postDetails({
            detail: detail,
            postdetails_id: postdetails_id
        })
    }
}

export { PostDetailsUseCase }