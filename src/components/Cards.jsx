import { useState, useEffect } from "react"

const Cards = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setCards(data))

    return () => {
      setCards([])
    }
  }, [])

  return (
    <div className="container px-6 lg:px-0">
      {/* <!-- card one --> */}
      {cards.map((card) => {
        return (
          <div
            key={card.company}
            className="lg:h-[9.6875rem] w-full bg-white px-5 pt-8 md:py-8 md:px-7 lg:px-9 rounded-md flex items-start md:items-center justify-start md:justify-between flex-col md:flex-row shadow-xl shadow-Dark_Cyan/20 mb-10 md:mb-6 relative"
          >
            {/* <!-- left --> */}
            <div className="relative flex items-start justify-start w-full flex-col md:flex-row border-b border-Dark_Grayish_Cyan md:border-none">
              {/* <!-- logo --> */}
              <div className="h-[3.125rem] w-[3.125rem] md:w-[5.625rem] md:h-[5.625rem] absolute -top-14 left-0 md:relative md:top-0 mr-6">
                <img
                  src={card.logo}
                  alt="photosnap"
                  className="w-full h-full"
                />
              </div>
              {/* <!-- text --> */}
              <div>
                <div className="flex items-center mb-3">
                  <p className="mr-6 md:mr-4 text-Dark_Cyan font-bold">
                    {card.company}
                  </p>
                  {card.new && (
                    <p className="mr-2 text-white font-medium bg-Dark_Cyan w-[3.25rem] rounded-[2rem] text-sm px-1.5 py-1 uppercase grid place-items-center">
                      New!
                    </p>
                  )}
                  {card.featured && (
                    <p className="h-[1.625rem] bg-Very_Dark_Grayish_Cyan text-white uppercase font-medium text-sm rounded-full grid place-items-center px-1.5">
                      Featured
                    </p>
                  )}
                </div>
                <p className="text-small font-bold text-Very_Dark_Grayish_Cyan md:text-lg tracking-wide mb-4 hover:text-Dark_Cyan cursor-pointer">
                  {card.position}
                </p>
                <div className="flex items-center mb-5 md:mb-0 space-x-3 md:space-x-5">
                  <p className="text-Dark_Grayish_Cyan text-small font-medium">
                    {card.postedAt}
                  </p>

                  <p className="text-Dark_Grayish_Cyan text-small font-medium flex items-center">
                    <span className="block h-1 w-1 rounded-full bg-Dark_Grayish_Cyan mr-[10px] md:mr-5"></span>
                    {card.contract}
                  </p>
                  <p className="text-Dark_Grayish_Cyan text-small font-medium flex items-center">
                    <span className="block h-1 w-1 rounded-full bg-Dark_Grayish_Cyan mr-[10px] md:mr-5"></span>
                    {card.location}
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- right/ roles --> */}
            <div className="mt-4 md:mt-0 flex gap-[1.125rem] flex-wrap md:flex-nowrap mb-6 md:mb-0">
              <p className="h-8 px-2 bg-Background capitalize text-sm text-Dark_Cyan rounded-md grid place-items-center font-bold hover:bg-Dark_Cyan hover:text-Background duration-200 cursor-pointer">
                {card.role}
              </p>
              <p className="h-8 px-2 bg-Background capitalize text-sm text-Dark_Cyan rounded-md grid place-items-center font-bold hover:bg-Dark_Cyan hover:text-Background duration-200 cursor-pointer">
                {card.level}
              </p>
              {card.languages.map((each) => {
                return (
                  <p className="h-8 px-2 bg-Background capitalize text-sm text-Dark_Cyan rounded-md grid place-items-center font-bold hover:bg-Dark_Cyan hover:text-Background duration-200 cursor-pointer">
                    {each}
                  </p>
                )
              })}
              {card.tools.map((tool) => {
                return (
                  <p className="h-8 px-2 bg-Background capitalize text-sm text-Dark_Cyan rounded-md grid place-items-center font-bold hover:bg-Dark_Cyan hover:text-Background duration-200 cursor-pointer">
                    {tool}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
