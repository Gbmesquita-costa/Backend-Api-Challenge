import { Router } from "express"

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { CreatePostController } from "../modules/posts/usecases/CreateUser/CreateUserController"

const postRoutes = Router()

const createdPostController = new CreatePostController()

postRoutes.use(ensureAuthenticated)
postRoutes.post("/createpost/:create", createdPostController.handle)

export { postRoutes }