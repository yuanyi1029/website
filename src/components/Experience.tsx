import experiencesData from "../data/experiencesData";
import { formatDate } from "../utils/format";

const Experience: React.FC = () => { 
  return ( 
    <section className="container border-t-2 border-highlight">
      <h1 className="py-[2rem]">What I'm Doing.</h1>
      { 
        experiencesData.map((eachExperience, experienceIndex) => { 
          return (
            <a 
              key={ experienceIndex }
              href={ eachExperience.hyperlink }
              target="_blank"
              rel="noreferrer"
            >
              <article 
                key={ experienceIndex }
                className="
                  group grid grid-cols-10 
                  gap-[0.75rem] md:gap-[3rem] p-[0.5rem] md:p-[1rem]
                  hover:bg-highlight rounded-2xl"
              > 
                <div className="
                  col-span-2 md:pt-[0.5rem] 
                  group-hover:bg-highlight"
                > 
                  <p className="
                    flex flex-col md:flex-row items-center 
                    group-hover:bg-highlight"
                  >
                    { formatDate(eachExperience.startDate) }
                    <span className="group-hover:bg-highlight">
                      &nbsp;-&nbsp;
                    </span>
                    { formatDate(eachExperience.endDate) }
                  </p>
                </div>
                <div className="col-span-8">
                  <div className="
                    grid grid-cols-5 gap-[0.5rem] md:gap-[1.25rem] 
                    group-hover:bg-highlight"
                  >
                    <img 
                      src={ eachExperience.icon.src } 
                      alt={ eachExperience.icon.alt }
                      className="
                        h-auto w-max
                        col-span-1 
                        rounded-full object-cover drop-shadow-sm"
                    /> 
                    <div className="col-span-4 group-hover:bg-highlight">
                      <h3 className="group-hover:bg-highlight">
                        { eachExperience.company }
                      </h3>
                      <h4 className="pb-[0.5rem] group-hover:bg-highlight">
                        { eachExperience.position }
                        { " " } • { " " }
                        { eachExperience.type }
                      </h4>
                      <p className="group-hover:bg-highlight">
                        { eachExperience.description }
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          )
        })
      }
    </section>
  )
}

export default Experience; 