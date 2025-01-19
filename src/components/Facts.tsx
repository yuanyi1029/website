import profile2 from "../assets/profile2.png"; 

const Facts: React.FC = () => { 
  return ( 
    <section className="container">
      <img 
        src={ profile2 }
        alt="Profile 2 Image"
        height={ 75 } 
        width={ 75 }
      />
      <div>
        <h1>A Little Bit About Me. </h1>
        <p> 
          😊 Hello! I'm currently a computer science student at Monash 
          University Malaysia looking to kickstart my career at the tech
          industry. 
        </p>
        <br></br>
        <p> 
          💡 I've been programming since I was eighteen, and my passion and 
          interest in computers led me to pursue a career in computer science. 
          Since then, I have shifted my career focus into fullstack application
          development and systems design where I work as a software engineering 
          intern at multiple companies while exploring some machine learning 
          concepts on my own.   
        </p>
        <br></br>
        <p> 
          🌴 Previously, I have interned at Keysight Technologies and Ant 
          International as a Software Engineer while working as a class 
          assistant at Monash University for a few introductory cmputer science 
          units. I would love to share my work and experience in a blog, but it 
          is currently in progress and more updates on the soon!   
        </p>
        <br></br>
        <p> 
          💻 I enjoy working with the SpringBoot framework for the backend and 
          React for the frontend, which I polish my skills by working on 
          fullstack applications that I am passionate in. 
        </p>
        <br></br>
        <p> 
          🍵 When I'm not programming, you can find me watching Youtube videos, 
          cafe hopping and looking for programming and design inspirations.
        </p>
      </div>
    </section>
  )
}

export default Facts; 