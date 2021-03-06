import { Routes as Router, Route } from "react-router-dom"

import React from 'react'
import HomePage from "../pages/Home"
import SingUp from "../pages/SingUp"
import TodoList from "../pages/TodoList"

export default function Routes() {
    return (
        <Router>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<SingUp/>}/>
            <Route path="/todo" element={<TodoList/>}/>
        </Router>
    )
}
