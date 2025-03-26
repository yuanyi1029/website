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
  disabled
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
              disabled={ disabled }
              className={ `
                p-2
                text-text 
                bg-transparent disabled:bg-highlight
                border-2
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
              disabled={ disabled }
              className={ `
                resize-none p-2 
                text-text 
                bg-transparent disabled:bg-highlight
                border-2 
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
        ${ formState.errors[name] ? "visible" : "invisible" } ` }
      >
        {
          (
            () => {
              switch (formState.errors[name]?.type) {
                case "required":
                  return `${label} is required!`;
                case "validate":
                  return `${label} is required!`;
                case "maxLength":
                  return `Maximum character of 500 reached!`;
                default:
                  return `Invalid field!`; 
              }
            }
          )()
        }
      </p>
    </div>
  )
} 

export default Input;