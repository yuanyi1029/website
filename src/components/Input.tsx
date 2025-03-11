import Field from "../interfaces/field"; 

const Input: React.FC<Field> = ({ 
  componentType,
  type, 
  id, 
  name, 
  label, 
  placeholder, 
  register, 
  validation 
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={ id }>
        { label }
      </label>
      {
        componentType === "input" ? (
          <input 
            type={ type }
            id={ id } 
            { ...register(name, validation) }
            placeholder={ placeholder }
            className="
              p-2
              text-text border-2 border-outline outline-text rounded-xl
              custom-pointer"
          />
        ) : (
          <textarea 
            id={ id } 
            { ...register(name, validation) }
            rows={ 5 }
            placeholder={ placeholder }
            className="
              resize-none p-2 
              text-text border-2 border-outline outline-text rounded-xl
              custom-pointer"
          />
        )
      }
    </div>
  )
} 

export default Input;