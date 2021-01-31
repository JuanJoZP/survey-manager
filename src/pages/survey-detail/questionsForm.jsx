import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate } from "@reach/router"

const QuestionsForm = ({ survey, handleFinish }) => {
  const [totalQuestions] = useState(survey.questions.length)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [checkboxes, setCheckboxes] = useState({})
  const [lastChecked, setLastChecked] = useState(null)
  const [answers, setAnswers] = useState({})

  const handleChangeCheckbox = e => {
    const { checked } = e.target
    const { name } = e.target

    const object = checkboxes
    object[name] = checked

    setCheckboxes(object)

    const checkedAmount = assignChecked(checkboxes).length
    const { maxAnswers } = survey.questions[currentQuestion - 1]

    if (checkedAmount > maxAnswers) {
      const target = document.getElementById(lastChecked)
      target.checked = false
      object[target.name] = false
      setCheckboxes(object)
    }

    setLastChecked(e.target.id)
  }

  const handleChangeQuestion = () => {
    const checked = assignChecked(checkboxes)
    // if checked.length = 0 {
    //  display error
    //  return
    // }

    const object = answers
    answers[currentQuestion] = [...checked]

    setAnswers(object)

    setCheckboxes({})
    setLastChecked(null)

    setCurrentQuestion(currentQuestion + 1)
  }

  const handleSubmit = () => {
    const checked = assignChecked(checkboxes)

    const object = answers
    answers[currentQuestion] = [...checked]

    setAnswers(object)

    // handleFinish(answers)
  }

  return (
    <div>
      <h1>{`Question ${currentQuestion} of ${totalQuestions}`}</h1>

      <p>{survey.questions[currentQuestion - 1].statement}</p>

      <form>
        {survey.questions[currentQuestion - 1].options.map((option, index) => (
          <label htmlFor={`${index}`} key={`option/${option}`}>
            <input
              type="checkbox"
              name={`${index}`}
              id={`${index}`}
              onChange={handleChangeCheckbox}
            />
            &nbsp;
            {option}
            <br />
          </label>
        ))}
        <br />

        <button
          type="button"
          onClick={() => {
            navigate("/")
          }}
        >
          Cancel
        </button>

        {currentQuestion !== totalQuestions ? (
          <button type="button" onClick={handleChangeQuestion}>
            Next
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  )
}

QuestionsForm.propTypes = {
  survey: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        statement: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        maxAnswers: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
  handleFinish: PropTypes.func.isRequired,
}

export default QuestionsForm

function assignChecked(object) {
  const result = []

  const keys = Object.keys(object)

  keys.forEach(key => {
    if (object[key] === true) {
      result.push(key)
    }
  })

  return result
}
