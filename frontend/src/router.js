import React from 'react'
import { BrowserRouter as Router,Route, Link, Switch} from "react-router-dom";
import Home from "./components/Home"
import CreateNote from "./components/CreateNote"
import CreateUser from "./components/CreateUser"
import NoteList from "./components/NoteList"
import Navbar from "./components/Navbar"
const router = () => {
    return (
        <Router> 
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createnote" component={CreateNote} />
            <Route exact path="/createuser" component={CreateUser} />
            <Route exact path="/notelist" component={NoteList} />
        </Switch>
            
      </Router>
    )
}

export default router
