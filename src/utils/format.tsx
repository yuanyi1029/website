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

const formatDate: (date: string | null) => string = (date) => {
  return (date === null ? "Present" : date);
}

export { formatImage, formatDate }; 