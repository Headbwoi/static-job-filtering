import React from "react"

const Filters = ({ filters, clearAll, clearFilter }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-24 bg-white px-5 md:px-7 lg:px-9 rounded-md shadow-xl shadow-Dark_Cyan/20 mb-10 md:mb-6 cursor-pointer">
        <div className="active-filters h-5 p-1 flex items-center gap-4 flex-wrap">
          {filters.map((tag, index) => {
            return (
              <div
                key={index}
                className="h-7
                 w-fit flex items-center text-Dark_Cyan font-bold bg-Filter_Tablets"
              >
                <p className="mr-1">{tag}</p>
                <button
                  onClick={() => {
                    clearFilter(tag)
                  }}
                  className="h-full w-7 grid place-items-center bg-Dark_Cyan hover:bg-Very_Dark_Grayish_Cyan"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="text-Filter_Tablets"
                  >
                    <title>remove filter</title>
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
        <div className="ml-auto">
          <button
            onClick={() => {
              clearAll()
            }}
            className="text-base text-Dark_Grayish_Cyan"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  )
}

export default Filters
