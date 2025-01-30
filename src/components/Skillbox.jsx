function Skillbox({ text }) {

  return (
    <>
      <div className="w-40 sm:w-56 md:w-64 lg:w-72 h-28 sm:h-32 md:h-36 lg:h-40 bg-[#F3F0E0] p-4 sm:p-6 md:p-8 text-2xl sm:text-4xl md:text-5xl font-semibold flex justify-center items-center">
        {text}
      </div>
    </>
  )
}

export default Skillbox;
