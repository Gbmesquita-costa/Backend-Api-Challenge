import { Request, Response } from "express"
import { container } from "tsyringe"

import { CreateUseCase } from "./CreateUserUseCase"

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password, name } = request.body

        const createUserUseCase = container.resolve(CreateUseCase)

        await createUserUseCase.execute({
            email,
            name,
            password
        })

        return response.status(201).send()
    }
}

export { CreateUserController }