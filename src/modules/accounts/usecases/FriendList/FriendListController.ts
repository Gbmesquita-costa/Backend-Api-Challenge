import { Request, Response } from "express";
import { container } from "tsyringe";

import { FriendListUseCase } from "./FriendListUseCase";

class FriendListController {
    async handle(request: Request, response: Response): Promise<Response> {
         const allFriends = container.resolve(FriendListUseCase)

         const all = await allFriends.execute()

         return response.status(200).json(all)
    }
}

export { FriendListController }