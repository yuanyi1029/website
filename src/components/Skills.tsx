import skillsData from "../data/skillsData";

const Skills: React.FC = () => { 
  return ( 
    <section className="container border-t-2 border-grey-secondary">
      <h1 className="py-[2rem]">Some of My Skills.</h1>
      {
        skillsData.map((eachSkill, skillIndex) => { 
          return (
            <article 
              key={ skillIndex } 
              className="pb-[2rem]"
            >
              <h3 className="pb-[1rem]">{ eachSkill.title }</h3>
              <div className="flex flex-wrap gap-[1.5rem] md:gap-[2rem]">
                {
                  eachSkill.icons.map((eachIcon, iconIndex) => { 
                    return (
                      <div 
                        key={ iconIndex } 
                        className="flex flex-col items-center"
                      > 
                        <img 
                          src={ eachIcon.src }
                          alt={ eachIcon.alt }
                          className="
                            h-[70px] md:h-[75px] w-[70px] md:w-[75px]"
                        />
                        <p>{ eachIcon.label }</p>
                      </div> 
                    )
                  })
                }
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default Skills; 