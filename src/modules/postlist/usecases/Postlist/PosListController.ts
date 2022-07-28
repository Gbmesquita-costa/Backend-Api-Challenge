import { Request, Response } from "express";

import { container } from "tsyringe";
import { PostListUseCase } from "./PostListUseCase";

class PostListController {
    async handle(request: Request, response: Response): Promise<Response> {
        const repositoryList = container.resolve(PostListUseCase)

        const allPostList = await repositoryList.execute()

        return response.status(200).json(allPostList)
    }
}

export { PostListController }