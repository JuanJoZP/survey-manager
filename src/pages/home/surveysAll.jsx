import React, { useEffect, useState } from "react"
import { Link } from "@reach/router"
import PropTypes from "prop-types"
import axios from "axios"

const SurveysAll = ({ orderBy, reload }) => {
  const [surveys, setSurveys] = useState([
    {
      title: "Blue or Red",
      id: 1,
    },
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // axios.get(api call ./surveys?filter=all?orderby=${orderBy} ).then(data => setSurveys(data))
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
              <Link to={`/detail/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We could not find any surveys</h3>
      )}
    </div>
  )
}

SurveysAll.propTypes = {
  orderBy: PropTypes.string.isRequired,
  reload: PropTypes.bool.isRequired,
}

export default SurveysAll
