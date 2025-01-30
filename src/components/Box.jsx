function Box({Picture} ) {

    return (
      <>
      <div className="relative w-10 h-10">
                  {/* Before pseudo-element */}
                  <div
                  style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 'calc(100% + 10px)',
                  height: 'calc(100% + 10px)',
                  backgroundColor: 'rgb(166, 0, 160)',
                  clipPath: 'polygon(0px 0px, calc(100% - 10px) 0px, 100% 10px, 100% 100%, 10px   100%, 0px calc(100% - 10px))',
                  }}
                  className="relative"
                  >
                  {/* Image */}
                  <img
                  src={Picture}
                  alt="Linkedin Picture"
                  className="absolute top-0 left-0 w-10 h-10 object-cover border border-[#f3f0e0] object-center bg-[#1C1C1C]"
                  />
                  </div>
                </div>
      </>
    )
  }
  
  export default Box