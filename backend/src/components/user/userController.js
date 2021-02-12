import userModel from "./userModel"
const noteCtrl = {}

noteCtrl.getUsers = async (req, res) => {
    const users = await userModel.find(); 
    res.send(users)

}
noteCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = await new userModel({
        username
    })
    newUser.save()
    res.send("User Created")
}

noteCtrl.deleteUser = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User Delete" })
   }

module.exports = noteCtrl
