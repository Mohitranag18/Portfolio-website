function Footer() {

    return (
      <>
      <div className="flex bg-[#F3F0E0] items-end">
        <div className="h-16 w-[10%] bg-[#183717]"></div>
        <div className="h-28 w-[15%] bg-[#183717]"></div>
        <div className="h-16 w-[15%] bg-[#183717]"></div>
        <div className="h-40 w-[20%] bg-[#183717]"></div>
        <div className="h-56 w-[40%] bg-[#183717]"></div>
      </div>
      <footer className=" justify-end items-center gap-8 text-[#F3F0E0] bg-[#183717] h-full px-16 py-8">
        <div className="flex flex-col md:flex-row items-start md:justify-evenly">
          {/* Contact */}
          <div className="flex-col justify-start">
            <h1 className="py-4 text-2xl font-bold border-b-4 border-dotted border-[#F3F0E0]">Contact</h1>   
            {/* Email Link */}
            <a href="mailto:mohitr8998@gmail.com"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Mohitr8998@gmail.com
            </a>
            {/* Phone Link */}
            <a href="tel:+919690463547"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              +91 9690463547
            </a>
            {/* Location Link */}
            <a href="https://www.google.com/maps/place/Dehradun,+Uttarakhand,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Dehradun, Uttarakhand <br /> India
            </a>
          </div>

          {/* Follow */}
          <div className="flex-col justify-start">
            <h1 className="py-4 text-2xl font-bold border-b-4 border-dotted border-[#F3F0E0]">Follow</h1>
            {/* GitHub */}
            <a href="https://github.com/mohitranag18"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              GitHub
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mohitrana18"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              LinkedIn
            </a>
            {/* X (Twitter) */}
            <a href="https://twitter.com/mohitrana178635"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              X [Twitter]
            </a>
            {/* Peerlist */}
            <a href="https://peerlist.io/mohitrana18"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Peerlist
            </a>
            {/* Medium */}
            <a href="https://medium.com/@mohitrana18"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Medium
            </a>
          </div>

          {/* Links */}
          <div className="flex-col justify-start">
            <h1 className="py-4 text-2xl font-bold border-b-4 border-dotted border-[#F3F0E0]">Links</h1>
            {/* Blogs */}
            <a href="https://medium.com/@mohitrana18"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Blogs
            </a>
            {/* Work Experience */}
            <a href="https://www.linkedin.com/in/mohitrana18/details/experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Work Experience
            </a>
            {/* Resume */}
            <a href="https://drive.google.com/drive/folders/1Y7vSXajwDtQmjOquEPvm1-u2nyD7Y1Yk"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Resume
            </a>
            {/* Contact */}
            <a
              href="/contact"  // Internal link for '/contact'
              className="py-2 text-xl font-semibold relative cursor-pointer group block"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center h-16 mt-8 w-full">
          <div className="flex justify-center w-full md:ml-20">
            <p className="relative cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top smoothly
            >
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              Back To Top
            </p>
          </div>

          <p className="w-20 text-[#FF8BFF] font-bold text-3xl flex justify-center items-center">{'</>'}</p>
        </div>
      </footer>
      </>
    )
  }
  
  export default Footer