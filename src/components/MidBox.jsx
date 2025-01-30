function MidBox({Picture} ) {

    return (
      <>
      <div className="relative w-40 h-40">
                  {/* Before pseudo-element */}
                  <div
                  style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 'calc(100% + 20px)',
                  height: 'calc(100% + 20px)',
                  backgroundColor: 'rgb(166, 0, 160)',
                  clipPath: 'polygon(0px 0px, calc(100% - 20px) 0px, 100% 20px, 100% 100%, 20px   100%, 0px calc(100% - 20px))',
                  }}
                  className="relative"
                  >
                  {/* Image */}
                  <img
                  src={Picture}
                  alt="Linkedin Picture"
                  className="absolute top-0 left-0 w-40 h-40 object-cover border border-[#f3f0e0] object-center bg-[#1C1C1C]"
                  />
                  </div>
                </div>
      </>
    )
  }
  
  export default MidBox