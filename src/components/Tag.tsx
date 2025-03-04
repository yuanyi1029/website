import Identifier from "../interfaces/identifier";

const Tag: React.FC<Identifier> = ({ type, colour }) => { 
  return ( 
    <>
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
    </>
  )
}

export default Tag; 