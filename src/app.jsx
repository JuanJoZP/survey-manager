import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

// import pages here
import Home from "./pages/home/index"

const NotFound = () => <h1>Not Found</h1>

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <NotFound default />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
