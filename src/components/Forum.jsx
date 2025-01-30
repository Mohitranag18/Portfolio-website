function Forum() {
    return (
        <>
        <div className=" text-[#F3F0E0] flex justify-center items-center min-h-screen">
            <form name="Conact me"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="w-full max-w-md p-8"
            >
                <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Name</h2>
                <input type="text"
                placeholder="Your Full Name"
                name="name"
                className="w-full p-3 text-[#F3F0E0] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
                required
                />

                <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Email</h2>
                <input type="text"
                placeholder="Your Email"
                name="email"
                className="w-full p-3 text-[#F3F0E0] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
                required
                />

                <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Message</h2>
                <textarea
                name="message"
                placeholder="Let us know about your interest"
                rows="5"
                className="w-full p-3 text-[#F3F0E0] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
                ></textarea>

                <div className="bot-field hidden">
                <div data-netlify-recaptcha="true"></div>
                </div>

                <input
                type="submit"
                value=">>> Send"
                className="w-full bg-[#183717] text-[#FFDBFF] p-3 rounded-lg hover:bg-[#50DA4C] transition duration-300 cursor-pointer font-semibold mt-4"
                />
            </form>
        </div>
        </>
    );
}

export default Forum;