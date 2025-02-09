import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div  className="bg-[#0D162E] flex-col text-center gap-8 md:gap-0 container py-8 lg:py-16 w-full min-h-[75vh] flex items-center justify-center relative " >
      <div className="flex flex-col gap-4 items-center justify-center z-10">
        <h1 className='text-2xl md:text-4xl lg:text-6xl text-slate-100 font-bold leading-relaxed lg:leading-normal drop-shadow-2xl'>Spotlight Your Creativity <br /> Curate Unforgetteable Events</h1>
        <div className="inline-flex items-center gap-2 ">
      <a href="" className='bg-gradient-to-b shadow-xl p-4 rounded-full px-4 text-white bg-blue-500 text-center'>Get Started</a>
      <a href="" className='bg-gradient-to-b shadow-xl p-4 rounded-full px-4 text-white bg-pink-500 text-center'>Explore Events</a>
      </div>
      </div>
    </div>
    <section className="flex flex-col-reverse lg:flex-row w-full py-8 md:py-16 justify-between gap-8 md:gap-0 container px-10">
      <div className="md:pt-16 " >
        <img src="../../public/3187910.jpg" alt="" className='w-full ' />
      </div>
      <div className="flex flex-col gap-4 items-start justify-evenlytext-left py-8 lg:pl-16">
        <p className="text-accent tracking-[1px] font-semibold items-center gap-2 flex">
          <hr className="w-20 h-3 text-blue-600 " />
        </p>
        <h1 className="text-3xl md:text-5xl text-primary text-pink-600 font-semibold md:leading-normal">Unlock Your <br /> Creative Potential</h1>
        <hr className="w-full border border-neutral-200" />
        <p className="text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-500 text-justify">Our app empowers individual contributors and artists like you to unleash your creativity and organize remarkable events. Whether you're planning a solo exhibition, a live performance, or a collaborative workshop, our platform provides the tools and features you need to make your events a resounding success.</p>
        <a href="" className="rounded-full bg-blue-500 p-4 text-white text-center">Get Started</a>
      </div>
    </section>
    </>
  )
}

export default Dashboard