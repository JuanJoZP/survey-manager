import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

// import pages here
import Home from "./pages/home/index"
import Details from "./pages/survey-detail/index"
import Result from "./pages/survey-results/index"

const NotFound = () => <h1>Not Found</h1>

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Details path="detail/:id" />
      <Result path="result/:id" />
      <NotFound default />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
