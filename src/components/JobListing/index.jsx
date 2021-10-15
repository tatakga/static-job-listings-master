const JobListing = ({
  creatorLogo,
  creatorName,
  jobTags,
  jobTitle,
  jobCategories,
  postedTime,
  jobType,
  jobPlace,
  addCategoryFilter,
  borderStyle
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row md:items-center bg-white px-6 md:px-10 pb-6 pt-8 md:pt-8 md:pb-8 rounded-md shadow-lg ${borderStyle ? 'border-l-4 border-desaturatedDarkCyan' : 'border-0'}`}>
      <div className="absolute -top-6 md:static md:mr-6 md:h-full">
        <img className="w-12 h-auto md:h-full md:w-auto" src={creatorLogo} alt="" />
      </div>
      <div>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <p className="text-desaturatedDarkCyan font-bold mr-2">{creatorName}</p>
          {jobTags.length > 0 && jobTags.map((tag, index) => <TagComponent key={index} text={tag} />)}
        </div>
        <h3 className="font-bold text-veryDarkGrayishCyan mb-5 md:mb-4 cursor-pointer hover:text-desaturatedDarkCyan">{jobTitle}</h3>
        <p className="text-darkGrayishCyan text-sm flex gap-2 items-center mb-5 md:mb-0">
          {postedTime}
          <span className="w-1 h-1 bg-darkGrayishCyan rounded-full"></span>
          {jobType}
          <span className="w-1 h-1 bg-darkGrayishCyan rounded-full"></span>
          {jobPlace}
        </p>
      </div>
      <div className="border-divider mb-4 md:hidden"></div>
      <div className="flex flex-wrap gap-4 md:flex-1 md:justify-end">
        {jobCategories.length > 0 && jobCategories.map((category, index) => <CategoryComponent key={index} text={category} addCategoryFilter={addCategoryFilter} />)}
      </div>
    </div>
  )
}

const TagComponent = ({ text }) => {
  return (
    <p
      className={`text-white px-3 pt-1 rounded-2xl font-bold text-sm ${text === "NEW!" || text === 'new!' || text === 'New!' ? 'bg-desaturatedDarkCyan' : 'bg-veryDarkGrayishCyan'}`}>{text}</p>
  )
}

const CategoryComponent = ({ text, addCategoryFilter }) => {
  return (
    <button onClick={() => addCategoryFilter(text)} className="bg-desaturatedDarkCyan bg-opacity-30 text-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white font-bold p-2 rounded">{text}</button>
  )
}

export default JobListing
