import Form from "./Form";

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="container border-t-2 border-highlight"
    >
      <h1 className="py-[2rem]">Come Say Hi.</h1>
      <Form />
    </section>
  )   
}

export default Contact; 