
import { Link } from 'react-scroll';


const Navbar = () => {
  const nvItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
    
  ];

  return (
    <div className="flex justify-around items-center p-4" id='nav'>
      <div>
        <h1 className="font-semibold text-purple-200 rounded-full border-2 border-white p-2">DP</h1>
      </div>
      <div className="flex gap-6">
        {nvItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            className="text-md text-white cursor-pointer hover:text-purple-200"
          >
            {item.name}
          </Link>
        ))}

        <a className="text-md text-white cursor-pointer hover:text-purple-200" href='Resume.pdf' target='blank'>Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
