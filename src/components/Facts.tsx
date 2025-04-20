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
              💡 I've been programming since I was eighteen, and my current passion 
              lies within fullstack application development and systems design, 
              where I work as a software engineering intern at multiple companies 
              while exploring some machine learning concepts on my own.
            </p>
            <br></br>
            <p> 
              🌴 Previously, I have interned at Keysight Technologies and Ant 
              International as a software engineer. While I would love to share my 
              work and experience in a blog, it is currently still in progress, so
              more updates are coming soon!
            </p>
            <br></br>
            <p> 
              💻 I enjoy working with the Spring Boot framework for the backend and
              ReactJS for the frontend, and I actively polish my skills by working 
              on fullstack application passion projects.
            </p>
            <br></br>
            <p> 
              🍵 When I'm not programming, you can find me watching YouTube videos, 
              cafe hopping, and looking for programming and design inspirations.
            </p>
          </div>
        </div>
      </Scroll>
    </section>
  )
}

export default Facts; 