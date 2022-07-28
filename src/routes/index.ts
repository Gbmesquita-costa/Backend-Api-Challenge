import { Router } from "express"

import { userRouter } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"
import { updateRoutes } from "./updateProfile.routes"
import { updateRouter } from "./updateUser.routes"

import { profilesRoutes } from "./listprofiles.routes"
import { searchRoutes } from "./searchuser.routes"
import { friendRoutes } from "./friendlist.routes"

import { friendsRoutes } from "./friends.routes"
import { postRoutes } from "./post.routes"
import { getPosts } from "./getposts.routes"

import { detailsRoutes } from "./postdetails.routes"
import { postListRoutes } from "./postlist.routes"

const router = Router()

router.use(authenticateRoutes)

router.use("/create", userRouter)
router.use("/avatar", updateRouter)
router.use(updateRoutes)

router.use("/profiles", profilesRoutes)
router.use("/search", searchRoutes)

router.use("/friends", friendRoutes)
router.use(friendsRoutes)

router.use(postRoutes)
router.use("/viewposts", getPosts)

router.use(detailsRoutes)
router.use("/postlist", postListRoutes)

export { router }