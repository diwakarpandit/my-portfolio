

const Experience = () => {
  let h = '< Experience >'
  return (
    <>
    <h1 className="text-white bg-purple-900 text-2xl text-center pt-2 ">{h}</h1>
    <div id="experience" className="bg-purple-900 p-2  flex gap-3 flex-col justify-center items-center lg:flex-row min-h-[40vh]">
      <div className="border-2 rounded-md border-white p-4 lg:w-[30%] flex flex-col gap-2">
        <h1 className="text-white">Freelance, Event Management</h1>
        <p className="text-white font-thin">2016 - present</p>
        <p className="text-white">Managing Events Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil, perspiciatis, fugit commodi magnam sit modi ratione ullam nemo aperiam velit quo minus, incidunt maxime odit! Quibusdam placeat corporis neque.</p>
      </div>
      <div className="border-2 rounded-md border-white p-4 lg:w-[30%]  flex flex-col gap-2">
        <h1 className="text-white">Assistant Manager, Tour & Travels</h1>
        <p className="text-white font-thin">2013 – 2016</p>
        <p className="text-white">My work experience in tour and travel may not
seem directly related to data science, but I wish
there are likely transferable skills I can emphasize,
For example, managing a team, analyzing
customer feedback, or using data to improve
operational efficiency. Be sure to quantify my
accomplishments where possible.
</p>
      </div>
    </div>
    </>
  )
}

export default Experience
