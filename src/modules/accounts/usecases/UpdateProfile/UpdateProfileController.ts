import { container } from "tsyringe"
import { Request, Response } from "express";

import { UpdateProfileUseCase } from "./UpdateProfileUseCase";

class UpdateProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params
        const { email, password } = request.body

        const updateProfile = container.resolve(UpdateProfileUseCase)

        const profile = await updateProfile.execute({
            slug: slug,
            email: email,
            password: password
        })

        return response.status(200).json(profile)
    }
}

export { UpdateProfileController }