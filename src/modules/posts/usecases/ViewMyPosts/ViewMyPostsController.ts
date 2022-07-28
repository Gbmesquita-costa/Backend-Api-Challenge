import { Request, Response } from "express";
import { container } from "tsyringe";

import { ViewMyPostUseCase } from "./ViewMyPostUseCase";

class ViewMyPostsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const viewsPosts = container.resolve(ViewMyPostUseCase)

        const all = await viewsPosts.execute()

        return response.status(200).json(all)
    }
}

export { ViewMyPostsController }