import { Router } from "express"
import { getNotes, createNote, getNote, deleteNote, updateNote } from "./noteController"
const router = Router()

router
  .route("/")
  .get(getNotes)
  .post(createNote)

router
  .route("/:id")
  .delete(deleteNote)
  .put(updateNote)
  .get(getNote)

export default router
