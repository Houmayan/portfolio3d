import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle,setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full max-w-7xl justify-between items-center mx-auto flex">
        <Link
          to={"/"}
          className="flex sm:flex-col md:flex-row items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className="w-9 h-9 object-contain" src={logo} alt="" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Houmayan&nbsp;<span className="sm:block hidden"> | Aspire Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a href={`#${link.id}`} onClick={()=>setActive(link.title)}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile navigation */}
        <div className="sm:hidden   flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="" 
          className="w-[28px] h-[28px]  object-contain cursor-pointer "
          onClick={()=>{setToggle(!toggle)}}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 rounded min-w-[140px] z-10`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} font-medium cursor-pointer text-base`}>
              <a href={`#${link.id}`} onClick={
                ()=>{
                  setActive(link.title);
                  setToggle(!toggle);
                }
                }>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
