import React, { useState, useEffect } from "react"
import { navigate } from "@reach/router"
import PropTypes from "prop-types"

import QuestionForm from "./questionsForm"

const Detail = ({ id }) => {
  const [survey, setSurvey] = useState({
    title: "Favorite Pet",
    description:
      "We wanted to know wich are your preferred pets Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, sunt. Suscipit corporis reprehenderit harum impedit vitae quibusdam eum excepturi doloribus animi non. Possimus corrupti omnis pariatur dolorem, esse temporibus quaerat.",
    questions: [
      { statement: "Dogs or cats?", options: ["dogs", "cats"], maxAnswers: 1 },
      {
        statement: "Birds, or snakes?",
        options: ["birds", "snakes"],
        maxAnswers: 3,
      },
    ],
  })

  useEffect(() => {
    // axios.get("api call /surveys/${id}").then(data => {
    //  setSurvey(data)
    //  setLoading(false)
    // }
  }, [])

  const handleFinish = answers => {
    /* axios.post("api call /surveys/${id}").then(data => {
        // body = answers
        if (data.error) {
          // error message
        } else {
          // succes mesagge
        }
      }) */
    navigate(`/result/${id}`)
  }

  const [answering, setAnswering] = useState(false)

  return (
    <div>
      <h1>{survey.title}</h1>

      {answering ? (
        <QuestionForm survey={survey} handleFinish={handleFinish} />
      ) : (
        <div>
          <p>{survey.description}</p>

          <button type="button" onClick={() => setAnswering(true)}>
            Answer survey
          </button>
        </div>
      )}
    </div>
  )
}

Detail.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Detail
