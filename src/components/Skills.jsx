

const Skills = () => {
  let skilldata = [
    {
      Image : 'images/html.svg',
      name: 'HTML'
    },
    {
      Image : 'images/css.svg',
      name: 'CSS'
    },
    {
      Image : 'images/js.svg',
      name: 'JS'
    },
    {
      Image : 'images/python.svg',
      name: 'PYTHON'
    },
    {
      Image : 'images/PowerBI.png',
      name: 'PowerBI'
    },
    {
      Image : 'images/Ds.png',
      name: 'Data-Science'
    },
   
  ]

  let h = '< Skills >'
  return (
   <div id="skills" >
    <h1 className="text-2xl text-white text-center pt-4">{h}</h1>
    <div  className="bg-black flex justify-center items-center gap-2 py-5 h-[40vh]">
      {
        skilldata.map((x , i) => {
          return(
            <div key={i} className="text-center">
            <img  src={x.Image} className="h-24 w-24 hover:scale-105 cursor-pointer"/>
            <h2 className="text-white font-semibold">{x.name}</h2>
            </div>
          )
        })
      }
    </div>
    
    </div>
  )
}

export default Skills
