import { Request, Response } from "express";
import { container } from "tsyringe";

import { SearchUserUseCase } from "./SearchUserUseCase";

class SearchUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { search } = request.query

        const searchUser = container.resolve(SearchUserUseCase)

        const usersReturned = await searchUser.execute(search)

        return response.status(200).json(usersReturned)
    }
}

export { SearchUserController }