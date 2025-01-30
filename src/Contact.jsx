import Form from './components/Forum'
import profilepic from "./assets/profilepic.jpg"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

function Contact() {
    return ( 
        <>
        <Header/>
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

            <div className="md:w-[50%] text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#50DA4C]">Social Links</h1>

                <div className="mt-4 flex flex-wrap justify-center gap-6 text-lg text-[#F3F0E0]">
                {[
                    { label: "Email", link: "mailto:mohitr8998@gmail.com" },
                    { label: "Linkedin", link: "https://www.linkedin.com/in/mohitrana18" },
                    { label: "Github", link: "https://github.com/mohitranag18" },
                    { label: "X [ Twitter ]", link: "https://twitter.com/mohitrana178635" },
                    { label: "Peerlist", link: "https://peerlist.io/mohitrana" },
                    { label: "Medium", link: "https://medium.com/@mohitrana18" }
                ].map((item, index) => (
                    <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl relative cursor-pointer group"
                    >
                    {item.label}
                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#F3F0E0] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                    </a>
                ))}
                </div>

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
        <div className="w-screen h-full bg-[#F3F0E0] p-6 md:p-12">
        <Title TitleText={"Contact"} color={"#50DA4C"}/>
        <Form/>
        </div>
        <Footer/>
        </>
     );
}

export default Contact;