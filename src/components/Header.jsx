function Header() {

    return (
      <>
      <div className="flex flex-col py-4 md:flex-row sm:justify-between items-center gap-4 md:gap-0 md:px-16 md:py-8 bg-[#183717]">
      <div>
        <p className="w-auto text-[#FF8BFF] font-bold text-3xl flex justify-center items-center">{'<>'}</p>
      </div>
      <nav className="flex justify-center flex-wrap md:justify-end items-center gap-4 md:gap-8 text-[#F3F0E0] bg-[#183717]">
        {[
          { name: "About", link: "/", internal: true },
          { name: "Experience", link: "https://www.linkedin.com/in/mohitrana18/details/experience/", internal: false },
          { name: "Blogs", link: "https://medium.com/@mohitrana18", internal: false },
          { name: "Resume", link: "https://drive.google.com/drive/folders/1Y7vSXajwDtQmjOquEPvm1-u2nyD7Y1Yk", internal: false },
          { name: "Contact", link: "/contact", internal: true },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.internal ? "_self" : "_blank"} // Conditional target based on internal
            rel={item.internal ? "" : "noopener noreferrer"} // Only apply rel for external links
            className="text-xl font-semibold relative cursor-pointer group"
          >
            {item.name}
            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </a>
        ))}
      </nav>

      </div>
      </>
    )
  }
  
  export default Header