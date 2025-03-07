import { useState } from "react"
import emailjs from "@emailjs/browser";

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
    const { name, value } = event.target

    setFormData(previousState => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = (event) => {
    event.preventDefault(); 

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    // EmailJS requires custom interface to be of type Record<string, unknown>
    emailjs
      .send(
        serviceId, 
        templateId, 
        formData as Record<string, string>, 
        publicKey
      )
      .then(() => { console.log("Success!") })
      .catch((error) => { console.log(error) });
  }

  return (
    <section 
      id="contact" 
      className="container border-t-2"
    >
      <h1 className="py-[2rem]">Come Say Hi.</h1>
     
      <form onSubmit={ handleSubmit }>
        <div className="flex flex-col">
          <label htmlFor="name">Name *</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="How may I address you?"
            value={ formData.name }
            onChange={ handleChange }
            className="border-2"
            />
        </div>

        <div className="flex flex-col">
          <label>Email *</label>
          <input 
            type="text"
            id="email"
            name="email"
            placeholder="How may I contact you?"
            value={ formData.email }
            onChange={ handleChange }
            className="border-2"
            />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message *</label>
          <textarea 
            id="message"
            name="message"
            placeholder="Tell me more!"
            value={ formData.message }
            onChange={ handleChange }
            className="border-2"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  )   
}

export default Contact; 