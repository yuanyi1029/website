import experiencesData from "../data/experiencesData";

const formatDate = (date: string | null): string => {
  return (date === null ? "Present" : date);
}

const Experience: React.FC = () => { 
  return ( 
    <section className="container">
      <h1>What I'm Doing.</h1>
      { 
        experiencesData.map(eachExperience => { 
          return (
            <article> 
              <div> 
                <p>
                  { formatDate(eachExperience.startDate) }
                  { " " } - { " " }
                  { formatDate(eachExperience.endDate) }
                </p>
              </div>
              <div>
                <div>
                  <img 
                    src={ eachExperience.icon.src } 
                    alt={ eachExperience.icon.alt }
                    height={ 75 }
                    width={ 75 }
                  /> 
                </div> 
                <div>
                  <h3>{ eachExperience.company }</h3>
                  <p>
                    { eachExperience.position }
                    { " " } • { " " }
                    { eachExperience.type }
                  </p>
                  <p>{ eachExperience.description }</p>
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