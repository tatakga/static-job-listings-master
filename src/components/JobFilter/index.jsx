import React from 'react'
import RemoveIcon from "../../images/icon-remove.svg"

const JobFilter = ({
  categoryFilter,
  deleteCategoryFilter,
  clearCatagoryFilter
}) => {
  return (
    <div className="relative w-full -top-24">
      <div className={`${categoryFilter.length <= 0 ? 'hidden' : 'flex'} justify-between p-5 flex-wrap gap-4 bg-white rounded-md`}>
        <div className="flex flex-wrap gap-4">
          {categoryFilter.length > 0 && categoryFilter.map((category, index) => {
            return (
              <button key={index} className="flex items-center rounded-md overflow-hidden">
                <span className="bg-desaturatedDarkCyan bg-opacity-30 text-desaturatedDarkCyan p-2">{category}</span>
                <span onClick={() => deleteCategoryFilter(category)} className="bg-desaturatedDarkCyan p-3 cursor-pointer hover:bg-veryDarkGrayishCyan hover:text-white">
                  <img src={RemoveIcon} className="w-4 h-4" alt="" />
                </span>
              </button>
            )
          })}
        </div>
        <button onClick={clearCatagoryFilter} className="text-desaturatedDarkCyan text-sm font-bold hover:underline">Clear</button>
      </div >
    </div>
  )
}

export default JobFilter
