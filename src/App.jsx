import { useEffect, useState } from "react"
import Header from "./components/Header"
import JobFilter from "./components/JobFilter"
import JobListing from "./components/JobListing"

import dummyjobs from "./dummy/dummy-jobs"

const App = () => {
  const [jobs, setJobs] = useState(dummyjobs)
  const [categoryFilter, setCategoryFilter] = useState([])

  useEffect(() => {
    let unMounted = false;

    if (!unMounted) {
      if (categoryFilter.length === 0) {
        setJobs([...dummyjobs])
      } else {
        const filteredJobs = dummyjobs.filter((job) => {
          return categoryFilter.find((category) => {
            return job.jobCategories.includes(category)
          })
        })
        setJobs([...filteredJobs])
      }
    }

    return () => {
      unMounted = true
    }

  }, [categoryFilter])

  const addCategoryFilter = (item) => {
    if (categoryFilter.indexOf(item) !== -1) {
      return
    } else {
      setCategoryFilter((current) => [...current, item])
    }
  }

  const deleteCategoryFilter = (item) => {
    const filteredItem = categoryFilter.filter(category => category !== item)
    setCategoryFilter([...filteredItem])
  }

  const clearCatagoryFilter = () => {
    setCategoryFilter([])
  }

  return (
    <>
      <Header />
      <section className="bg-bgLightGrayishCyan">
        <div className="flex flex-col px-6 py-14 md:max-w-6xl mx-auto">

          <JobFilter
            categoryFilter={categoryFilter}
            deleteCategoryFilter={deleteCategoryFilter}
            clearCatagoryFilter={clearCatagoryFilter}
          />
          <div className="flex flex-col gap-14 md:gap-10">
            {jobs.map((job, index) => <JobListing
              key={job.id} {...job}
              addCategoryFilter={addCategoryFilter}
              borderStyle={index === 0 || index === 1}
            />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
