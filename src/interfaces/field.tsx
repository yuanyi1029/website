import { RegisterOptions } from "react-hook-form";

interface BaseField { 
  id: string; 
  name: string; 
  label: string; 
  placeholder: string; 
  validation?: RegisterOptions; 
  disabled: boolean;
}

interface InputField extends BaseField { 
  type: "input";
  inputType: "text" | "password"; 
}

interface TextAreaField extends BaseField {
  type: "textarea";
  inputType: null
}

type Field = InputField | TextAreaField;

export default Field;