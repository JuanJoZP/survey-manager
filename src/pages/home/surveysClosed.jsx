import React, { useEffect, useState } from "react"
import { Link } from "@reach/router"
import PropTypes from "prop-types"
import axios from "axios"

const SurveysClosed = ({ orderBy, reload }) => {
  const [surveys, setSurveys] = useState([
    {
      title: "Blue or Red",
      id: 1,
    },
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // axios.get(llamada a la api ./surveys?filter=closed?orderby=${orderBy} ).then(data => setSurveys(data))
    // setLoading(false)
  }, [reload])

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div>
      {surveys.length ? (
        <ul>
          {surveys.map(item => (
            <li key={`survey/${item.id}`}>
              <Link to={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We could not find any surveys closed</h3>
      )}
    </div>
  )
}

SurveysClosed.propTypes = {
  orderBy: PropTypes.string.isRequired,
  reload: PropTypes.bool.isRequired,
}

export default SurveysClosed
