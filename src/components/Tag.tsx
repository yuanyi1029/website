import Identifier from "../interfaces/identifier";

const Tag: React.FC<Identifier> = ({ type, colour }) => { 
  return ( 
    <div className="flex pt-[1.5rem] pb-[0.25rem]">
      <p 
        style={{ 
          backgroundColor: `${ colour }30`, 
          color: colour 
        }} 
        className="
          px-[0.75rem] py-[0.25rem]
          rounded-full object-cover"
      >
        { type }
      </p>
    </div>
  )
}

export default Tag; 