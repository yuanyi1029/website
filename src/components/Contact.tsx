import { useState } from "react"
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import Toast from "./Toast";
import Form from "./Form";
import { ContactForm } from "../interfaces/form";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "", 
    email: "", 
    message: ""
  }); 

  const handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (event) => {
    const { name, value } = event.target; 

    setFormData(previousState => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => void = (event) => {
    const { classList, value } = event.target;
    const trimmedValue = value.trim();

    if (trimmedValue === "") { 
      console.log("Empty")
    }
  }

  const handleSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = (event) => {
    event.preventDefault(); 

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY; 

    // EmailJS requires custom interface to be of type Record<string, unknown>
    emailjs
      .send(
        serviceId, 
        templateId, 
        formData as Record<string, string>, 
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
  }

  return (
    <section 
      id="contact" 
      className="container border-t-2 border-highlight"
    >
      <h1 className="py-[2rem]">Come Say Hi.</h1>
      <Form />

      {/* <form 
        onSubmit={ handleSubmit }
        className="flex flex-col gap-4 py-[1rem]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            Name 
            <span className="text-red-500">&nbsp;*</span>
          </label>
          <input 
            required
            type="text"
            id="name"
            name="name"
            placeholder="How may I address you?"
            value={ formData.name }
            onChange={ handleChange }
            onBlur={ handleBlur }
            className="
              p-2 
              text-text border-2 border-outline outline-text rounded-xl 
              custom-pointer"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Email
            <span className="text-red-500">&nbsp;*</span>
          </label>
          <input 
            required
            type="text"
            id="email"
            name="email"
            placeholder="How may I contact you?"
            value={ formData.email }
            onChange={ handleChange }
            onBlur={ handleBlur }
            className="
              p-2 
              text-text border-2 border-outline outline-text rounded-xl 
              custom-pointer" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message
            <span className="text-red-500">&nbsp;*</span>
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={ 5 }
            placeholder="Tell me more!"
            value={ formData.message }
            onChange={ handleChange }
            onBlur={ handleBlur }
            className="
              resize-none p-2 
              text-text border-2 border-outline outline-text rounded-xl 
              custom-pointer"
          />
        </div>

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
      </form> */}
    </section>
  )   
}

export default Contact; 