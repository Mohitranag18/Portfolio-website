function Forum() {
    return (
      <div className="text-[#F3F0E0] flex justify-center items-center min-h-screen">
        <form 
          name="Contact me"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="w-full max-w-md p-8"
        >
          <input type="hidden" name="form-name" value="Contact me" />
          <div className="bot-field hidden">
            <input type="hidden" name="bot-field" />
          </div>
  
          <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Name</h2>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            className="w-full p-3 text-[#183717] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
            required
          />
  
          <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Email</h2>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full p-3 text-[#183717] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
            required
          />
  
          <h2 className="text-[#50DA4C] text-xl font-semibold mb-4">Message</h2>
          <textarea
            type="text"
            name="message"
            placeholder="Let me know about your interest"
            rows="5"
            className="w-full p-3 text-[#183717] border border-[#50DA4C] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#50DA4C] mb-4 bg-[#F3F0E0]"
          ></textarea>
  
          <input
            type="submit"
            value=">>> Send"
            className="w-full bg-[#50DA4C] text-[#183717] p-3 rounded-lg hover:bg-[#50DA4C] hover:text-[#FFDBFF] transition duration-300 cursor-pointer font-semibold mt-4"
          />
        </form>
      </div>
    );
  }
  
  export default Forum;
  