import MidBox from "./MidBox";
import TheDailyDrip from "../assets/TheDailyDrip.jpeg";
import StackJourney from "../assets/StackJourney.jpeg";
import Graphia from "../assets/Graphia.jpeg"
import Logo100XGROW from "../assets/100XGROW.jpeg"
import Title from "./Title";

function Projects() {

    return (
        <>
            <div className="bg-[#F3F0E0] w-full h-full p-8 py-12">
                <div className="flex-col h-full w-full bg-[#F3F0E0] items-center">
                    <Title TitleText={"Projects"} color={"#50DA4C"} />
                    <div className="h-full w-full border-y-4 border-dotted border-[#1C1C1C] my-8 py-4">

                        {/* project 1 */}
                        <div className="flex flex-col sm:flex-col justify-between items-center sm:gap-4 p-8 py-16 border-y-4 border-dotted border-[#1C1C1C] md:flex-col md:gap-4 lg:flex-row">
                            <MidBox Picture={Logo100XGROW} />
                            <div className="w-full sm:w-[70%] text-[#1C1C1C] mt-4 sm:mt-0">
                            <div className="mt-4 flex flex-wrap gap-8">
                                <a href="https://github.com/Mohitranag18/100XGROW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ GitHub ]"}
                                </a>

                                <a href="https://github.com/Mohitranag18/100XGROW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ Live Link ]"}
                                </a>
                            </div>
                                <h1 className="mt-4 text-3xl font-semibold">100XGROW</h1>
                                <p className="mt-4">
                                100XGROW is a next-gen career platform designed to simplify job searching. Powered by AI, automation, and data insights, it helps users build ATS-friendly resumes, get job recommendations, receive mentorship, and track applications—all in one place!
                                </p>
                            </div>
                            <div>
                                {/* Hide [+] on mobile screens */}
                                <p className="hidden lg:block text-4xl sm:text-5xl font-bold text-[#1C1C1C] hover:text-[#A600A0] transition-transform duration-500 ease-in-out hover:translate-y-[-10px] transform cursor-pointer">[+]</p>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className="flex flex-col sm:flex-col justify-between items-center sm:gap-4 p-8 py-16 border-b-4 border-dotted border-[#1C1C1C] md:flex-col md:gap-4 lg:flex-row">
                            <MidBox Picture={Graphia} />
                            <div className="w-full sm:w-[70%] text-[#1C1C1C] mt-4 sm:mt-0">
                            <div className="mt-4 flex flex-wrap gap-8">
                                <a href="https://github.com/Mohitranag18/Graphia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ GitHub ]"}
                                </a>

                                <a href="https://github.com/Mohitranag18/Graphia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ Live Link ]"}
                                </a>
                            </div>
                                <h1 className="mt-4 text-3xl font-semibold">Graphia</h1>
                                <p className="mt-4">
                                Graphia is a modern social media platform with features like CRUD operations, user profiles, JWT-based authentication, real-time private and group chats, file sharing, and advanced search. Built with React, Tailwind CSS, Django, and WebSockets, it plans to add audio and video calling using WebRTC.
                                </p>
                            </div>
                            <div>
                                {/* Hide [+] on mobile screens */}
                                <p className="hidden lg:block text-4xl sm:text-5xl font-bold text-[#1C1C1C] hover:text-[#A600A0] transition-transform duration-500 ease-in-out hover:translate-y-[-10px] transform cursor-pointer">[+]</p>
                            </div>
                        </div>

                        {/* project 3 */}
                        <div className="flex flex-col sm:flex-col justify-between items-center sm:gap-4 p-8 py-16 border-b-4 border-dotted border-[#1C1C1C] md:flex-col md:gap-4 lg:flex-row">
                            <MidBox Picture={StackJourney} />
                            <div className="w-full sm:w-[70%] text-[#1C1C1C] mt-4 sm:mt-0">
                            <div className="mt-4 flex flex-wrap gap-8">
                                <a href="https://github.com/Mohitranag18/Stack-Journey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ GitHub ]"}
                                </a>

                                <a href="https://github.com/Mohitranag18/Stack-Journey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ Live Link ]"}
                                </a>
                            </div>
                                <h1 className="mt-4 text-3xl font-semibold">Stack Journey</h1>
                                <p className="mt-4">
                                StackJourney is a blogging platform for developers and tech enthusiasts to share experiences, tips, and guidance. Users can create, read, edit, and delete posts, show appreciation for informative blogs, and manage personalized profiles. It's a space for beginners and experts alike to learn, share, and grow together.
                                </p>
                            </div>
                            <div>
                                {/* Hide [+] on mobile screens */}
                                <p className="hidden lg:block text-4xl sm:text-5xl font-bold text-[#1C1C1C] hover:text-[#A600A0] transition-transform duration-500 ease-in-out hover:translate-y-[-10px] transform cursor-pointer">[+]</p>
                            </div>
                        </div>

                        {/* project 4 */}
                        <div className="flex flex-col sm:flex-col justify-between items-center sm:gap-4 p-8 py-16 border-b-4 border-dotted border-[#1C1C1C] md:flex-col md:gap-4 lg:flex-row">
                            <MidBox Picture={TheDailyDrip} />
                            <div className="w-full sm:w-[70%] text-[#1C1C1C] mt-4 sm:mt-0">
                            <div className="mt-4 flex flex-wrap gap-8">
                                <a href="https://github.com/Mohitranag18/The-Daily-Drip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ GitHub ]"}
                                </a>

                                <a href="https://thedailydrip.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl relative cursor-pointer group"
                                >
                                    <span className="absolute ml-[10%] bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-0"></span>
                                    {"[ Live Link ]"}
                                </a>
                            </div>
                                <h1 className="mt-4 text-3xl font-semibold">The Daily Drip</h1>
                                <p className="mt-4">
                                The Daily Drip Website, A modern website for a vibrant cafe, offering food, drinks, games, and event. Features: -Online Reservation Option -Event Notifications -Multichannel Contact(whatsapp, email, call) -Beautiful UI with Modern Animations(GSAP) -Built with HTML, CSS, JavaScript. Enhancing User Experience and Showcasing the Cafe.
                                </p>
                            </div>
                            <div>
                                {/* Hide [+] on mobile screens */}
                                <p className="hidden lg:block text-4xl sm:text-5xl font-bold text-[#1C1C1C] hover:text-[#A600A0] transition-transform duration-500 ease-in-out hover:translate-y-[-10px] transform cursor-pointer">[+]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
