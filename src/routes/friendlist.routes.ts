import { Router } from "express"

import { FriendListController } from "../modules/accounts/usecases/FriendList/FriendListController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const friendRoutes = Router()
const allFriends = new FriendListController()

friendRoutes.use(ensureAuthenticated)
friendRoutes.get("/", allFriends.handle)

export { friendRoutes }