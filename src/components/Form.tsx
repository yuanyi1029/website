import { useForm, SubmitHandler, FormProvider } from "react-hook-form"; 
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import Toast from "./Toast";
import Input from "./Input"; 
import { ContactForm } from "../interfaces/form"; 
import { validateEmptySpaces } from "../utils/validation";
import { useState } from "react";

const Form: React.FC = () => { 
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false); 
  
  const methods = useForm<ContactForm>({
    mode: "onSubmit", 
    reValidateMode: "onBlur", 
    shouldFocusError: false
  }); 

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    setFormSubmitting(true); 

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY; 

    // EmailJS requires custom interface to be of type Record<string, unknown>
    emailjs
      .send(
        serviceId, 
        templateId, 
        data as Record<string, string>, 
        publicKey
      )
      .then(() => { 
        setFormSubmitting(false); 
        toast(
          <Toast 
            type="success" 
            title="Message Received!" 
            description="Thanks you! I'll get back to you soon!" 
          />, 
          {
            closeButton: false,
          }
        );
        methods.reset(); 
      })
      .catch(() => { 
        setFormSubmitting(false); 
        toast(
          <Toast 
            type="error" 
            title="An Error Occured!" 
            description="Something went wrong. Please try again." 
          />, 
          {
            closeButton: false,
          }
        ); 
      });
  }
  
  return (
    <FormProvider { ...methods }>
      <form 
        onSubmit={ methods.handleSubmit(onSubmit) }
        className="flex flex-col gap-4 py-[1rem]"
      >
        <Input 
          type="input" 
          inputType="text" 
          id="name" 
          name="name" 
          label="Name"
          placeholder="How may I address you?" 
          validation={{
            required: true,
            validate: validateEmptySpaces
          }} 
          disabled={ formSubmitting }
        />

        <Input 
          type="input" 
          inputType="text" 
          id="email" 
          name="email" 
          label="Email" 
          placeholder="How may I contact you?"
          validation={{ 
            required: true,
            validate: validateEmptySpaces
          }} 
          disabled={ formSubmitting }
        />

        <Input 
          type="textarea" 
          inputType={ null }
          id="message" 
          name="message" 
          label="Message" 
          placeholder="Tell me more!"
          validation={{ 
            required: true,
            validate: validateEmptySpaces,
            maxLength: 500
          }} 
          disabled={ formSubmitting }
        />

        <button 
          type="submit"
          disabled={ formSubmitting }
          className={ `
            p-2 
            text-text 
            bg-transparent hover:bg-highlight disabled:bg-highlight
            border-2 border-outline hover:border-text disabled:border-outline 
            rounded-xl custom-pointer ` } 
        >
          💌 Submit
        </button> 
      </form>
    </FormProvider>
  )
}

export default Form; 