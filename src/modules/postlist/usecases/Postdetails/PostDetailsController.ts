import { Request, Response } from "express";
import { container } from "tsyringe";

import { PostDetailsUseCase } from "./PostDetailsUseCase";

class PostDetailsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { postdetails } = request.params
        const { detail } = request.body

        const details = container.resolve(PostDetailsUseCase)

        await details.execute({
            detail: detail,
            postdetails_id: postdetails
        })

        return response.status(201).send()
    }
}

export { PostDetailsController }