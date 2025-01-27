import experiencesData from "../data/experiencesData";

const formatDate: (date: string | null) => string = (date) => {
  return (date === null ? "Present" : date);
}

const Experience: React.FC = () => { 
  return ( 
    <section className="container border-t-2 border-grey-secondary">
      <h1 className="py-[2rem]">What I'm Doing.</h1>
      { 
        experiencesData.map(eachExperience => { 
          return (
            <article className="grid grid-cols-10 gap-[1.25rem] pb-[2rem] "> 
              <div className="col-span-2 pt-[0.5rem]"> 
                <p>
                  { formatDate(eachExperience.startDate) }
                  { " " } - { " " }
                  { formatDate(eachExperience.endDate) }
                </p>
              </div>
              <div className="col-span-8">
                <div className="grid grid-cols-5 gap-[1.25rem]"> 
                  <img 
                    src={ eachExperience.icon.src } 
                    alt={ eachExperience.icon.alt }
                    className="
                      h-auto w-max
                      col-span-1 
                      rounded-full object-cover drop-shadow-sm"
                  /> 
                  <div className="col-span-4">
                    <h3>{ eachExperience.company }</h3>
                    <h4 className="pb-[0.5rem]">
                      { eachExperience.position }
                      { " " } • { " " }
                      { eachExperience.type }
                    </h4>
                    <p>{ eachExperience.description }</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default Experience; 