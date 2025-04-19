import Form from "./Form";
import Scroll from "./Scroll";

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="container border-t-2 border-highlight"
    >
      <Scroll>
        <div className="py-8">
          <h1>Come Say Hi.</h1>
          <h4>(Don't be shy, He doesn't bite 😉)</h4>
        </div>
        <Form />
      </Scroll>
    </section>
  )   
}

export default Contact; 