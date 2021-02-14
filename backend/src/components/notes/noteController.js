import noteModel from "./notasModel"
const noteCtrl = {}

noteCtrl.getNotes = async (req, res) => {
  const notes = await noteModel.find()
  res.json(notes)
}

noteCtrl.getNote = async (req, res) => {
  const note = await noteModel.findById(req.params.id)
  res.json(note)
}

noteCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body
  const newNote = new noteModel({
    title,
    content,
    date,
    author
  })
  await newNote.save()
  res.json({ message: "Note Saved" })
}

noteCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body
  await noteModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      author,
      content
    }
  )
  res.json({ message: "Note update" })
}
noteCtrl.deleteNote = async (req, res) => {
  const note = await noteModel.findByIdAndDelete(req.params.id)
  res.json({ message: "Note Delete" })
}

module.exports = noteCtrl
