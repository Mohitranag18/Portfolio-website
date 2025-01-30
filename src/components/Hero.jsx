import profilepic from "../assets/profilepic.jpg"

function Hero() {

    return (
      <>
         {/* Hero panel */}
      <div className="bg-[#183717] p-6 md:p-12 lg:p-24 flex flex-col md:flex-row items-center justify-center md:justify-around gap-16 md:gap-16">
        {/* Image div in hero panel */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Before pseudo-element */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)',
              backgroundColor: 'rgb(166, 0, 160)',
              clipPath: 'polygon(0px 0px, calc(100% - 20px) 0px, 100% 20px, 100% 100%, 20px 100%, 0px calc(100% - 20px))',
            }}
            className="relative"
          >
            {/* Image */}
            <img
              src={profilepic}
              alt="Profile Picture"
              className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 object-cover border border-[#f3f0e0] bg-white"
            />
          </div>
        </div>

        {/* Name and tagline hero panel */}
        <div className="text-center text-[#F3F0E0]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Hi, I'm <span className="text-[#FF8BFF]">Mohit Rana</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Software Engineer & Developer
          </h2>
        </div>
      </div>


        {/* below hero panel boxes */}
        <div className="flex bg-[#F3F0E0]">
            <div className="h-16 w-[10%] bg-[#183717]"></div>
            <div className="h-28 w-[15%] bg-[#183717]"></div>
            <div className="h-16 w-[15%] bg-[#183717]"></div>
            <div className="h-40 w-[20%] bg-[#183717]"></div>
            <div className="h-56 w-[40%] bg-[#183717]"></div>
        </div>
      </>
    )
  }
  
  export default Hero