import { Router } from "express"

import { ListAllProfilesController } from "../modules/accounts/usecases/ListAllProfiles/ListAllProfilesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const listAllProfiles = new ListAllProfilesController()
const profilesRoutes = Router()

profilesRoutes.use(ensureAuthenticated)
profilesRoutes.get("/", listAllProfiles.handle)

export { profilesRoutes }