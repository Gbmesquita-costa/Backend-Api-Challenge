import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { PostListController } from "../modules/postlist/usecases/Postlist/PosListController"

const postListRoutes = Router()
const newPostList = new  PostListController()

postListRoutes.use(ensureAuthenticated)
postListRoutes.get("/", newPostList.handle)

export { postListRoutes }