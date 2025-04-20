import Tag from "./Tag"; 
import Project from "../interfaces/project";
import { formatImage } from "../utils/format"; 
import { redirectUser } from "../utils/general"; 

const Card: React.FC<Project> = ({ 
  title, 
  stack,
  description, 
  date, 
  image,
  hyperlink
}) => { 
  return ( 
    <article 
      onClick={ () => redirectUser(hyperlink) }
      className="
        p-4 md:p-6
        group grid grid-rows-subgrid row-span-4
        hover:bg-highlight rounded-2xl custom-pointer"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={ formatImage(image).src }
          alt={ formatImage(image).alt }
          className="
            h-auto w-auto aspect-[16/9] 
            self-center rounded-2xl drop-shadow-sm group-hover:scale-110"
        />
      </div>
      <div className="
        flex flex-wrap gap-1 py-4
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
      <p className="group-hover:bg-highlight">{ description }</p>
    </article>
  )
}

export default Card; 