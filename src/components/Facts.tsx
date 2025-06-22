import Scroll from "./Scroll";
import profile2 from "../assets/profile2.png"; 

const Facts: React.FC = () => { 
  return ( 
    <section className="container">
      <Scroll>
        <div className="grid grid-cols-10 gap-8 py-8">
          <img 
            src={ profile2 }
            alt="Profile 2 Image"
            className="
              h-auto w-[70%] md:w-max 
              col-span-10 md:col-span-4 self-center justify-self-center
              rounded-2xl drop-shadow-lg"
          />
          <div className="col-span-10 md:col-span-6">
            <h1 className="pb-[2rem]">A Little Bit About Me. </h1>
            <p> 
              😊 Hello! I'm currently a computer science student at Monash 
              University Malaysia looking to kickstart my career in the tech 
              industry.
            </p>
            <br></br>
            <p> 
              💡 I've been programming since I was eighteen, with a strong passion 
              for fullstack application development and systems design. Currently, 
              I'm on the lookout for software engineering roles, all while diving 
              into machine learning concepts on my own.   
            </p>
            <br></br>
            <p> 
              🌴 My past experience? I have previously interned at Keysight Technologies
              and Ant International as a software engineer, with more exciting projects 
              coming soon! 
            </p>
            <br></br>
            <p> 
              💻 Tech stack-wise? Spring Boot and ReactJS, all day every day. 
            </p>
            <br></br>
            <p> 
              🍵 My hobbies you ask? without a doubt watching YouTube videos, cafe 
              hopping, and the occasional game of badminton. 
            </p>
          </div>
        </div>
      </Scroll>
    </section>
  )
}

export default Facts; 