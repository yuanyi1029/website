import { useFormContext } from "react-hook-form";

import Field from "../interfaces/field"; 

const Input: React.FC<Field> = ({ 
  type,
  inputType,
  id, 
  name, 
  label, 
  placeholder, 
  validation,
}) => {
  const { register, formState } = useFormContext();  

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor={ id }>
          { label }
          {
            validation?.required === true &&  
            <span className="text-red-500">&nbsp;*</span>
          }
        </label>

        {
          type === "input" ? (
            <input 
              type={ inputType }
              id={ id } 
              { ...register(name, validation) }
              placeholder={ placeholder }
              className={ `
                p-2
                text-text border-2 border-outline 
                outline-text rounded-xl
                custom-pointer ` }
              aria-invalid={ formState.errors.name ? "true" : "false" }
            />
          ) : (
            <textarea 
              id={ id } 
              { ...register(name, validation) }
              rows={ 5 }
              placeholder={ placeholder }
              className={ `
                resize-none p-2 
                text-text border-2 border-outline
                outline-text rounded-xl
                custom-pointer ` } 
              aria-invalid={ formState.errors.name ? "true" : "false" }
            />
          )
        }
      </div>

      {/* 
        formState.errors[name] rather than formState.errors.name to use 
        "name" from props rather than "name" literally 
      */}
      <p className={ `
        text-red-500 ${ formState.errors[name] ? 
        "visible" : 
        "invisible" }` }
      >
        { label } is required!
      </p>
    </div>
  )
} 

export default Input;