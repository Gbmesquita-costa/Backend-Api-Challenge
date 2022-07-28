import { Router } from "express"

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ViewMyPostsController } from "../modules/posts/usecases/ViewMyPosts/ViewMyPostsController"

const getPosts = Router()

const viewMyPosts = new ViewMyPostsController()

getPosts.use(ensureAuthenticated)
getPosts.get("/", viewMyPosts.handle)

export { getPosts }