import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

// import pages here
import Home from "./pages/home/index"
import About from "./pages/about/index"
import Contact from "./pages/contact/index"

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
