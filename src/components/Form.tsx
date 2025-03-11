import { useForm, SubmitHandler } from "react-hook-form"; 
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import Toast from "./Toast";
import Input from "./Input"; 
import { ContactForm } from "../interfaces/form"; 

const Form: React.FC = () => { 
  const { register, handleSubmit } = useForm<ContactForm>(); 
  
  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data); 
    
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY; 

    // EmailJS requires custom interface to be of type Record<string, unknown>
    emailjs
      .send(
        serviceId, 
        templateId, 
        data, 
        publicKey
      )
      .then(() => { 
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
      })
      .catch(() => { 
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
  }; 
  
  return (
    <form 
      onSubmit={ handleSubmit(onSubmit) }
      className="flex flex-col gap-4 py-[1rem]"
    >
      <Input 
        componentType="input" 
        type="text" 
        id="name" 
        name="name" 
        label="Name"
        placeholder="How may I address you?" 
        register={ register } 
        validation={{ required: true }} 
      />

      <Input 
        componentType="input" 
        type="text" 
        id="email" 
        name="email" 
        label="Email" 
        placeholder="How may I contact you?"
        register={ register } 
        validation={{ required: true }} 
      />

      <Input 
        componentType="textarea" 
        type="text" 
        id="message" 
        name="message" 
        label="Message" 
        placeholder="Tell me more!"
        register={ register } 
        validation={{ required: true }} 
      />

      <button 
        type="submit"
        className="
          p-2 
          text-text bg-transparent hover:bg-highlight
          border-2 border-outline hover:border-text rounded-xl 
          custom-pointer"
      >
        💌 Submit
      </button> 
    </form>
  )
}

export default Form; 