

const Navbar = () => {
  let nvItems = ['Home' , 'Experience' , 'Skills','Contact']
  return (
    <div className="flex justify-around items-center p-4 ">
      <div>
        <h1 className="font-semibold text-purple-200 rounded-full border-2 border-white p-2 ">DP</h1>
      </div>
      <div className="flex gap-6">
        {nvItems.map((x , index) => <p key={index} className="text-md text-white cursor-pointer hover:text-purple-200">{x}</p> )}
      </div>
    </div>
  )
}

export default Navbar
