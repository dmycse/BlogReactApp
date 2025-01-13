import { Link } from "react-router-dom";
import { navItems } from "./constants/navItems";

export const NavItems = () => {
  return (
    <>
      {navItems.map(item => (
        <li 
          key={item.id} 
          className="px-5 py-2 hover:bg-purple-300 hover:text-white rounded-lg"
        >
          <Link href={item.url}>{item.title}</Link>
        </li>
        ))
      }
    </>
  )
};
