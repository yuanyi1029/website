import profile1 from "../assets/profile1.png"; 

const Hero: React.FC = () => { 
  return ( 
    <section className="container">
      <div> 
        <h1>
          Hello, I'm Yuanyi. 👋
        </h1>
        <h3> 
          I am a sofware engineer who enjoys enhancing lives with code by day,
          and exploring new technologies to fuel my growth by night. 
        </h3>
        <h3> 
          Currently a Backend Engineer at Ant International. 
        </h3> 
      </div> 
      <img 
        src={ profile1 }
        alt="Profile 1 Image"
        height={ 75 }
        width={ 75 }
      />
    </section>
  )
}

export default Hero; 