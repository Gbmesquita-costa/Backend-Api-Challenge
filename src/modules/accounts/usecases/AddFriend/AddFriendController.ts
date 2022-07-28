import { Request, Response } from "express";
import { container } from "tsyringe"

import { AddFriendUseCase } from "./AddFriendUseCase";

class AddFriendController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { friend_id } = request.params
        const { email, avatar, name } = request.body

        const addfriend = container.resolve(AddFriendUseCase)

        await addfriend.execute({
            friend_id: friend_id,
            avatar: avatar,
            email: email,
            name: name
        })

        return response.status(201).send()
    }
}

export { AddFriendController }