import { Router } from "express"
import { getUsers, createUser, deleteUser } from "./userController"
const router = Router()

router
  .route("/")
  .get(getUsers)
  .post(createUser)

router.route("/:id").delete(deleteUser)

export default router
