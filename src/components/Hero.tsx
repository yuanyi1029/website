import profile1 from "../assets/profile1.png"; 

const Hero: React.FC = () => { 
  return ( 
    <section className="
      container h-[85svh]
      grid grid-cols-10 gap-[1.25rem] items-center"
    >
      <div className="col-span-6 pb-20"> 
        <h1>
          Hello, I'm Yuanyi. 👋
        </h1>
        <h3 className="pb-[2rem] font-normal leading-tight"> 
          I am a <b>sofware engineer</b> who enjoys <b>enhancing lives</b> with
          code by day, and exploring new technologies to fuel my growth by 
          night. 
        </h3>
        <h4 className="
          px-[1rem] py-[0.25rem] 
          bg-grey-secondary rounded-xl
        "> 
          📌 Currently a Backend Engineer at { " " }
          <b>
            <u className="bg-grey-secondary">
              Ant International
            </u>
          </b>. 
        </h4>   
      </div>
      <div className="col-span-4 pb-10"> 
        <img 
          src={ profile1 }
          alt="Profile 1 Image"
          className="
            h-72 w-72 
            justify-self-center 
            rounded-full object-cover drop-shadow-lg"
        />
      </div> 
    </section>
  )
}

export default Hero; 