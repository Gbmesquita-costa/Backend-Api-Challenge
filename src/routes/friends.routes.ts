import { Router } from "express"

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { AddFriendController } from "../modules/accounts/usecases/AddFriend/AddFriendController"

const friendsRoutes = Router()
const addToFriendList = new AddFriendController()

friendsRoutes.use(ensureAuthenticated)
friendsRoutes.post("/addfriend/:friend_id", addToFriendList.handle)

export { friendsRoutes }