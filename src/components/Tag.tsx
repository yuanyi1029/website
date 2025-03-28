import Identifier from "../interfaces/identifier";

const Tag: React.FC<Identifier> = ({ title }) => { 
  return ( 
    <p 
      className="
        px-[0.75rem] py-[0.25rem]
        text-text bg-accent
        rounded-full object-cover"
    >
      { title }
    </p>
  )
}

export default Tag; 