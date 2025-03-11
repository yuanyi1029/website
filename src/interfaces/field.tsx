import { UseFormRegister } from "react-hook-form";

import { ContactForm } from "./form";

type ComponentType = "input" | "textarea"; 
type FieldType = "text"; 

interface Field {
  componentType: ComponentType;
  type: FieldType;
  id: string;
  name: string; 
  label: string;
  placeholder: string;
  register: UseFormRegister<ContactForm>; 
  validation?: Object;
}

export default Field; 