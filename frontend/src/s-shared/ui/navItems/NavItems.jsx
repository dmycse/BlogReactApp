import { Link } from "react-router-dom";
import { navItems } from "@/s-shared/constants";

export const NavItems = () => {
  return (
    <>
      {navItems.map(item => (
        <li 
          key={item.id} 
        >
          <Link 
            to={item.url}
            className="px-5 py-2 hover:bg-purple-300 hover:text-white rounded-lg"
          >
            {item.title}
          </Link>
        </li>
        ))
      }
    </>
  )
};
