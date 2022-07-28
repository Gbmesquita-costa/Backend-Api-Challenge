import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { SearchUserController } from "../modules/accounts/usecases/SearchUser/SearchUserController";

const searchRoutes = Router()
const searchusercontroller = new SearchUserController()

searchRoutes.use(ensureAuthenticated)
searchRoutes.get("/", searchusercontroller.handle)

export { searchRoutes }