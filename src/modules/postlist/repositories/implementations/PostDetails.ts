import { Repository, getRepository } from "typeorm"

import { PostEntity } from "../../entities/PostEntity"
import { IPostDetails } from "../IPostDetails"
import { IPostDetailsDTO } from "../../dtos/IPostDetailsDTO"

class PostDetails implements IPostDetails {
    private repository: Repository<PostEntity>

    constructor() {
        this.repository = getRepository(PostEntity)
    }

    async postList(): Promise<PostEntity[]> {
        const all = this.repository.find()
        return all
    }

    async postDetails({ detail, postdetails_id }: IPostDetailsDTO): Promise<void> {
        const createDetail = this.repository.create({
            details: detail,
            postdetails_id: postdetails_id
        })

        await this.repository.save(createDetail)
    }
}

export { PostDetails }