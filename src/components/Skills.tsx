import skillsData from "../data/skillsData";

const Skills: React.FC = () => { 
  return ( 
    <section className="container border-t-2 border-grey-secondary">
      <h1 className="py-[2rem]">Some of My Skills.</h1>
      {
        skillsData.map(eachSkill => { 
          return (
            <article className="pb-[2rem]">
              <h3 className="pb-[1rem]">{ eachSkill.title }</h3>
              <div className="flex gap-[2rem]">
                {
                  eachSkill.icons.map(eachIcon => { 
                    return (
                      <div className="flex flex-col items-center"> 
                        <img 
                          src={ eachIcon.src }
                          alt={ eachIcon.alt }
                          className="h-[75px] w-[75px]"
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