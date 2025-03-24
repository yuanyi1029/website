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
            validation?.required &&  
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
                text-text border-2  
                ${ 
                  formState.errors[name] ? 
                  "border-red-500" : 
                  "border-outline"
                }
                outline-text rounded-xl
                custom-pointer ` }
            />
          ) : (
            <textarea 
              id={ id } 
              { ...register(name, validation) }
              rows={ 5 }
              placeholder={ placeholder }
              className={ `
                resize-none p-2 
                text-text border-2 
                ${ 
                  formState.errors[name] ? 
                  "border-red-500" : 
                  "border-outline"
                }
                outline-text rounded-xl
                custom-pointer ` } 
            />
          )
        }
      </div>

      {/* 
        formState.errors[name] rather than formState.errors.name to use 
        "name" from props rather than "name" literally 
      */}
      <p className={ `
        text-red-500 h-auto
        ${ 
          formState.errors[name] ? 
          "visible" : 
          "invisible" 
        } ` }
      >
        { 
          formState.errors[name]?.message as string || 
          "Invalid field!"
        }
      </p>
    </div>
  )
} 

export default Input;