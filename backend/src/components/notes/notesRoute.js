import { Router } from "express"
import { getNotes } from "./noteController"
const router = Router()

router.route("/").get(getNotes)

export default router
