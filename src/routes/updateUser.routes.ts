import { Router } from "express"
import multer from "multer"
import uploadConfig from "../config/upload"

import { UpdateUserAvatarController } from "../modules/accounts/usecases/UpdateUserAvatarUseCase/UpdateUserAvatarController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const updateRouter = Router()
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const updateUserAvatarController = new UpdateUserAvatarController()

updateRouter.use(ensureAuthenticated)
updateRouter.patch("/", uploadAvatar.single("avatar") , updateUserAvatarController.handle)

export { updateRouter }