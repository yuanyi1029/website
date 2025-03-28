import Tag from "./Tag"; 
import Project from "../interfaces/project";
import { formatImage } from "../utils/format"; 

const Card: React.FC<Project> = ({ 
  title, 
  stack,
  description, 
  date, 
  image,
  hyperlink
}) => { 
  return ( 
    <a
      href={ hyperlink }
      target="_blank"
      rel="noreferrer"
    >
      <article className="
        group flex flex-col 
        p-[1rem] md:p-[2rem] 
        hover:bg-highlight rounded-2xl"
      >
        <img
          src={ formatImage(image).src }
          alt={ formatImage(image).alt }
          className="
            h-auto w-max md:w-[31.25rem] aspect-[16/9] 
            self-center rounded-2xl drop-shadow-sm"
        />
        <div className="
          flex flex-wrap gap-1 pt-[1rem] pb-[0.5rem] 
          group-hover:bg-highlight"
        >
          {
            stack.map((eachStack, stackIndex) => { 
              return (
                <Tag 
                  title={ eachStack }
                  key={ stackIndex }
                />
              )
            })
          }
        </div>
        <h3 className="group-hover:bg-highlight">{ title } ({ date })</h3>
        <p className=" group-hover:bg-highlight">{ description }</p>
      </article>
    </a>
  )
}

export default Card; 