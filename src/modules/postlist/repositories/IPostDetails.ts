import { IPostDetailsDTO } from "../dtos/IPostDetailsDTO";
import { PostEntity } from "../entities/PostEntity";

interface IPostDetails {
    postList(): Promise<PostEntity[]>
    postDetails({ detail, postdetails_id }: IPostDetailsDTO): Promise<void>
}

export { IPostDetails }