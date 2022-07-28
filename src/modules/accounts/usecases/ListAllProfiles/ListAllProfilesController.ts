import { container } from "tsyringe"
import { Request, Response } from "express";

import { ListAllProfilesUseCase } from "./ListAllProfilesUseCase"

class ListAllProfilesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllProfiles = container.resolve(ListAllProfilesUseCase)

        const listAll = await listAllProfiles.execute()

        return response.status(200).json(listAll)
    }
}

export { ListAllProfilesController }