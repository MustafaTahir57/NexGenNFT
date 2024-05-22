import React from 'react'

const ComingSoon = () => {
  return (
    <div
      style={{
        background: "url(/background.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100vh',
        // maxHeight: '100vh'
      }}
      className="py-10 "
    >


      <section className="container flex justify-center items-center h-full">
        {" "}
        <div className="text-center font-extrabold text-6xl text-[#fdd122] drop-shadow-md">
          Coming Soon!
        </div>
      </section>
    </div>
  )
}

export default ComingSoon