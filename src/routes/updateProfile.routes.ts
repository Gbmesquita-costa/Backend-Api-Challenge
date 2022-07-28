import { Router } from "express"

import { UpdateProfileController } from "../modules/accounts/usecases/UpdateProfile/UpdateProfileController"

const updateRoutes = Router()

const updateProfile = new UpdateProfileController()

updateRoutes.put("/profile/:slug", updateProfile.handle)

export { updateRoutes }