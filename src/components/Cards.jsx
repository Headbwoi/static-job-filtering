const Cards = ({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  isFeatured,
  isNew,
  handleFilters,
  jobTags,
}) => {
  return (
    <>
      {/* <!-- card one --> */}
      <div key={company} className="card-container">
        {/* <!-- left --> */}
        <div className="relative flex items-start justify-start w-full flex-col md:flex-row border-b border-Dark_Grayish_Cyan md:border-none">
          {/* <!-- logo --> */}
          <div className="h-[3.125rem] w-[3.125rem] md:w-[5.625rem] md:h-[5.625rem] absolute -top-14 left-0 md:relative md:top-0 mr-6">
            <img
              src={process.env.PUBLIC_URL + logo}
              alt="photosnap"
              className="w-full h-full"
            />
          </div>
          {/* <!-- text --> */}
          <div>
            <div className="flex items-center mb-3">
              <p className="mr-6 md:mr-4 text-Dark_Cyan font-bold">{company}</p>
              {isNew && <p className="new-card">New!</p>}
              {isFeatured && <p className="featured-card ">Featured</p>}
            </div>
            <p className="text-small font-bold text-Very_Dark_Grayish_Cyan md:text-lg tracking-wide mb-4 hover:text-Dark_Cyan cursor-pointer">
              {position}
            </p>
            <div className="flex items-center mb-5 md:mb-0 space-x-3 md:space-x-5">
              <p className="text-Dark_Grayish_Cyan text-small font-medium">
                {postedAt}
              </p>

              <p className="text-Dark_Grayish_Cyan text-small font-medium flex items-center">
                <span className="block h-1 w-1 rounded-full bg-Dark_Grayish_Cyan mr-[10px] md:mr-5"></span>
                {contract}
              </p>
              <p className="text-Dark_Grayish_Cyan text-small font-medium flex items-center">
                <span className="block h-1 w-1 rounded-full bg-Dark_Grayish_Cyan mr-[10px] md:mr-5"></span>
                {location}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- right/ roles --> */}
        <div className="mt-4 md:mt-0 flex gap-[1.125rem] flex-wrap md:flex-nowrap mb-6 md:mb-0">
          {jobTags.map((tag, index) => {
            return (
              <button
                onClick={() => handleFilters(tag)}
                className="role-card"
                key={index}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Cards
