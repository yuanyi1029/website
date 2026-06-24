import Scroll from "./Scroll";
import profile1 from "../assets/profile1.png"; 

const Hero: React.FC = () => { 
  return ( 
    <section className="
      container h-[65svh] md:h-[85svh] 
      flex items-center"
    >
      <Scroll>
        <div className="
          grid grid-cols-10 gap-0 md:gap-[1.25rem] items-center"
        >
            <div className="
              col-span-10 md:col-span-6 pb-0 md:pb-20 order-2 md:order-1"
            > 
              <h1 className="text-center md:text-left pt-6 md:pt-0">
                Hello, I'm Yuanyi. 👋
              </h1>
              <h3 className="pb-[1rem] md:pb-[2rem] text-center md:text-left font-normal leading-tight"> 
                <b>Software engineer</b> solving practical problems by day, <b>AI tinkerer </b> 
                exploring endless side-quests by night.  
              </h3>
              <h4 className="
                px-[1rem] py-[0.25rem] 
                bg-highlight rounded-xl"
              > 
                📌 Currently building projects & exploring opportunities!
              </h4>
            </div>
            <div className="
              col-span-10 md:col-span-4 pb-0 md:pb-10 order-1 md:order-2"
            >
              <img 
                src={ profile1 }
                alt="Profile 1 Image"
                className="
                  h-64 w-64 
                  justify-self-center 
                  rounded-full object-cover drop-shadow-lg"
              />
            </div> 
        </div>
      </Scroll>
    </section>
  )
}

export default Hero; 