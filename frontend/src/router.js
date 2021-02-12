import React from 'react'
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home"
import createNote from "./components/CreateNote"

const router = () => {
    return (
        <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/createnote" component={createNote} />
        </div>
      </Router>
    )
}

export default router
