import LinkedinLogo from "../assets/Linkedin.png"
import Box from "./Box"
import Title from "./Title"

function About() {

    return (
      <>
      <div className="flex flex-col md:flex-row bg-[#F3F0E0] items-center">
                       {/* Left side */}
        <div className="w-full md:w-[50%] p-6 md:p-12">
          <Title TitleText={"About"} color={"#50DA4C"}/>

          <div className="my-4">
            <p className="text-xl md:text-2xl">
            👋 Hi, I'm Mohit Rana — a Software Engineer and Full-Stack Developer passionate   about building efficient, scalable, and visually engaging web applications. I'm   currently pursuing a BSc. in IT from Graphic Era Hill University.
            <br /><br />
            Actively involved in open-source, I've contributed to programs like GSSoC and   Hacktoberfest. Beyond coding, I share insights through blogs, collaborate with  developers, and explore emerging technologies.
            </p>
          </div>


          
        </div>

                       {/* Right side */}
        <div className="w-full md:w-[50%] p-6 md:p-12 flex flex-col">
          <div className="flex justify-between h-10 w-full">
            <div className="h-full w-10 bg-[#1C1C1C]"></div>
            <div className="h-full w-10 bg-[#1C1C1C]"></div>
          </div>

          <div className="flex justify-center h-full w-full">
            <div className="h-full w-full mx-10 bg-[#50DA4C] p-8">
              <p className="text-xl md:text-2xl border-b-2 border-dotted border-[#1C1C1C] pb-4">
                Feel free to explore my projects and get in touch for collaborations or hiring opportunities!
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-8">
                {[
                  { name: "[ Mail ]", link: "mailto:mohitr8998@gmail.com" },
                  { name: "[ Linkedin ]", link: "https://www.linkedin.com/in/mohitrana18" },
                  { name: "[ GitHub ]", link: "https://github.com/mohitranag18" },
                  { name: "[ Twitter ]", link: "https://twitter.com/mohitrana178635" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl relative cursor-pointer group"
                  >
                    {item.name}
                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                  </a>
                ))}
              </div>

            </div>
          </div>

          <div className="flex justify-between h-10 w-full">
            <div className="h-full w-10 bg-[#1C1C1C]"></div>
            <div className="h-full w-10 bg-[#1C1C1C]"></div>
          </div>

        </div>

      </div>
      </>
    )
  }
  
  export default About