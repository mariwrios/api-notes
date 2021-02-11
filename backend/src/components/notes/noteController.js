const noteCtrl = {}

noteCtrl.getNotes = (req, res) => res.json({ message: [] })
noteCtrl.getNote = (req, res) => res.json({ title: "hola vale" })
noteCtrl.createNote = (req, res) => res.json({ message: "Note Saved" })
noteCtrl.updateNote = (req, res) => res.json({ message: "Note update" })
noteCtrl.deleteNote = (req, res) => res.json({ message: "Note Delete" })

module.exports = noteCtrl
