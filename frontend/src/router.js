import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CreateNote from "./components/CreateNote"
import CreateUser from "./components/createUser/CreateUser"
import NoteList from "./components/NoteList"
import Navbar from "./components/Navbar/Navbar"
const router = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={NoteList} />
        <Route exact path="/edit/:id" component={CreateNote} />
        <Route exact path="/create" component={CreateNote} />
        <Route exact path="/user" component={CreateUser} />
      </Switch>
    </Router>
  )
}

export default router
