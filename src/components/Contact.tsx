import Form from "./Form";

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="container border-t-2 border-highlight"
    >
      <div className="py-[2rem]">
        <h1>Come Say Hi.</h1>
        <h4>(Don't be shy, He doesn't bite 😉)</h4>
      </div>
      <Form />
    </section>
  )   
}

export default Contact; 