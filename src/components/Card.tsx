import Tag from "./Tag"; 
import Project from "../interfaces/project";
import Image from "../interfaces/image";
import placeholder from "../assets/placeholder.png"; 

const formatImage: (image: Image | null) => Image = (image) => { 
  const placeholderImage: Image = {
    src: placeholder, 
    alt: "Placeholder Image",
    label: "Placeholder Image"
  };
  return (image === null ? placeholderImage : image); 
}

const Card: React.FC<Project> = ({ 
  title, 
  type, 
  description, 
  date, 
  image 
}) => { 
  return ( 
    <article className="flex flex-col">
      <img
        src={ formatImage(image).src }
        alt={ formatImage(image).alt }
        className="
          h-auto w-[31.25rem] aspect-[16/9] 
          self-center rounded-2xl drop-shadow-sm"
      />
      <Tag { ...type }/>
      <h3>{ title } ({ date })</h3>
      <p>{ description }</p>
    </article>
  )
}

export default Card; 