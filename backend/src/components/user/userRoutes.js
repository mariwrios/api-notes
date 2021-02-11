import { Router } from "express"
const router = Router()

router.route("/").get((req, res) => {
  res.status(200).send("User Routes")
})

export default router
