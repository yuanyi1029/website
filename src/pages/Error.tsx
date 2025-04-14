import bowser from "../assets/bowser.png"; 

const Error: React.FC = () => {
  return (
    <section className="
      container h-[92svh] md:h-[85vh] 
      flex flex-col md:flex-row items-center justify-center gap-12"
    >
      <img 
        src={ bowser }
        alt="SomeAlt"
        className="w-[80%] md:w-[50%]"
      />
      <h2 className="text-center md:text-left px-6 md:px-0">Sorry Mario, your page is in another castle!</h2>
    </section>
  )
}

export default Error;