import Identifier from "../interfaces/identifier";

const Tag: React.FC<Identifier> = ({ title }) => { 
  return ( 
    <p 
      className="
        h-[28px] w-auto
        px-[0.75rem] py-[0.25rem] items-center 
        text-text bg-accent
        rounded-full object-cover"
    >
      { title }
    </p>
  )
}

export default Tag; 