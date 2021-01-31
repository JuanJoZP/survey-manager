import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const Result = ({ id }) => {
  const [survey, setSurvey] = useState({
    title: "Fake title",
    description:
      "Fake description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos quas eius velit facere provident iusto facilis exercitationem? Repudiandae, quae iure! Blanditiis quo nihil numquam atque illum et, deserunt quasi.",
    answers: 7,
    options: [
      { content: "fake answer 1", answers: 5 },
      { content: "fake answer 2", answers: 2 },
    ],
  })

  useEffect(() => {
    // axios.get("api call /surveys/${id}").then(data => {
    //  setSurvey(data)
    //  setLoading(false)
    // }
  })

  return (
    <div>
      <h1>{survey.title}</h1>
      <p>{survey.description}</p>

      <ul>
        {survey.options.map(option => (
          <li key={`option/${option.content}`}>
            {`${option.content} - ${option.answers} Answers / ${Math.round(
              (option.answers * 100) / survey.answers
            )}`}
          </li>
        ))}
      </ul>

      <h3>
        Total:
        {` ${survey.answers}`}
      </h3>
    </div>
  )
}

Result.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Result
