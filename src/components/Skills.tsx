import skillsData from "../data/skillsData";

const Skills: React.FC = () => { 
  return ( 
    <section className="container">
      <h1>Some of My Skills.</h1>
      {
        skillsData.map(eachSkill => { 
          return (
            <article>
              <h3>{ eachSkill.title }</h3>
              {
                eachSkill.icons.map(eachIcon => { 
                  return (
                    <div> 
                      <img 
                        src={ eachIcon.src }
                        alt={ eachIcon.alt }
                        height={ 75 }
                        width={ 75 }
                      />
                      <p>{ eachIcon.label }</p>
                    </div> 
                  )
                })
              }
            </article>
          )
        })
      }
    </section>
  )
}

export default Skills; 