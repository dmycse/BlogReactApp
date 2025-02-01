import { Link } from "react-router-dom";
import { navItems, mobileNavItems } from "@/s-shared/constants";

export const NavItems = ({ mobileView, setOpenMobileMenu }) => {

  const navBar = mobileView ? mobileNavItems : navItems;

  return (
    <>
      {navBar.map(item => (
        <li 
          key={item.id} 
        >
          <Link 
            to={item.url}
            className="px-5 py-2 hover:bg-purple-300 hover:text-white rounded-lg"
            onClick={() => mobileView && setOpenMobileMenu(false)}
          >
            {item.title}
          </Link>
        </li>
        ))
      }
    </>
  )
};
