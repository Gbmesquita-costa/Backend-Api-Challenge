import { Router } from "express"

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { PostDetailsController } from "../modules/postlist/usecases/Postdetails/PostDetailsController"

const detailsRoutes = Router()
const newDetails = new PostDetailsController

detailsRoutes.use(ensureAuthenticated)
detailsRoutes.post("/postdetails/:postdetails", newDetails.handle)

export { detailsRoutes }