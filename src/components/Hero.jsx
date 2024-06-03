
const Hero = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-purple-500 to-purple-800 py-8 flex flex-col px-5 lg:px-4 gap-6 lg:gap-0 lg:flex-row lg:justify-around items-center">

      <div className="text text-center lg:text-left lg:w-[40%] flex flex-col gap-4">
        <h1 className="text-black text-4xl md:text-5xl">DIWAKAR PANDIT</h1>
        <p className="text-white text-md ">I am a hard worker and enthusiastic person, I want to build my
            future in the IT sector , As a first-year M-Tech Data Science
            student, I am passionate about gaining a foundation in
            statistical analysis, data mining, and machine learning
            techniques.
            My academic coursework enabled me to develop analytical
            solutions to solve real-world problems. I am also excited to
            learn more about creating and deploying python, image
            processing and machine-learning models for real-time
            applications and analysis data, Overall, I am confident that my
            strong work ethic and willingness to learn will enable me to
            make meaningful contributions to any organization.</p>
      </div>
      
     
      <div className="img h-[320px] w-full md:w-[400px] md:h-[360px] overflow-hidden rounded-xl "></div>
     
      
    </div>
  )
}

export default Hero
