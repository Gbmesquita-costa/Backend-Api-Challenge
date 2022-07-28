import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreatePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { create } = request.params
        const { post } = request.body

        const userPost = container.resolve(CreateUserUseCase)

        await userPost.execute({
            post: post,
            posts_id: create
        })

        return response.status(201).send()
    }
}

export { CreatePostController }