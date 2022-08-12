import { useState } from "react"
import React from "react"
import jobCardData from "./data/data.json"
import Header from "./components/Header"
import Filters from "./components/Filters"
import Cards from "./components/Cards"

function App() {
  const [filters, setFilters] = useState([])

  function handleFilters(tag) {
    if (filters.indexOf(tag) === -1) {
      setFilters((prevValue) => [...prevValue, tag])
    }
  }

  function clearAll() {
    setFilters([])
  }

  function deleteFilter(tag) {
    setFilters(filters.filter((item) => item !== tag))
  }
  return (
    <>
      <Header />

      <div className="container px-6 lg:px-0 ">
        {filters.length > 0 && (
          <Filters
            filters={filters}
            clearAll={clearAll}
            deleteFilter={deleteFilter}
          />
        )}
        {jobCardData.map((card) => {
          let jobTags = [
            card.role,
            card.level,
            ...(card.languages || []),
            ...(card.tools || []),
          ]
          let filterJobs = (jobTags, filters) =>
            filters.every((value) => jobTags.includes(value))

          return filters.length === 0 ? (
            <Cards
              key={card.id}
              logo={card.logo}
              company={card.company}
              position={card.position}
              postedAt={card.postedAt}
              contract={card.contract}
              location={card.location}
              isFeatured={card.featured}
              isNew={card.new}
              handleFilters={handleFilters}
              jobTags={jobTags}
            />
          ) : (
            filterJobs(jobTags, filters) && (
              <Cards
                key={card.id}
                logo={card.logo}
                company={card.company}
                position={card.position}
                postedAt={card.postedAt}
                contract={card.contract}
                location={card.location}
                isFeatured={card.featured}
                isNew={card.new}
                handleFilters={handleFilters}
                jobTags={jobTags}
              />
            )
          )
        })}
      </div>
    </>
  )
}

export default App
