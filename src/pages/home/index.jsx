import React, { useState } from "react"

import SurveysAll from "./surveysAll"
import SurveysActive from "./surveysActive"
import SurveysClosed from "./surveysClosed"
import Dropdown from "./dropdown"

const switchFilter = (filter, orderBy, reload) => {
  switch (filter) {
    case "active":
      return <SurveysActive orderBy={orderBy} reload={reload} />

    case "closed":
      return <SurveysClosed orderBy={orderBy} reload={reload} />

    default:
      return <SurveysAll orderBy={orderBy} reload={reload} />
  }
}

const Home = () => {
  const [filter, setFilter] = useState("all")
  const [orderBy, setOrderBy] = useState("popular")
  const [reload, setReload] = useState(false)

  return (
    <div>
      <h1>Survey Manager</h1>

      <Dropdown
        currentValue={filter}
        setCurrentValue={setFilter}
        options={["all", "active", "closed"]}
        name="filter"
      />

      <Dropdown
        currentValue={orderBy}
        setCurrentValue={setOrderBy}
        options={["popular", "latest"]}
        name="order by"
      />

      <button type="button" onClick={() => setReload(!reload)}>
        Reload
      </button>
      <hr />

      {switchFilter(filter, orderBy, reload)}
    </div>
  )
}

export default Home
// filter by open and closed, just show title
