import { NavItems } from "@/s-shared/ui/navItems/NavItems";
import { LogIn } from "@/d-features/logIn/LogIn";
import { LogOut } from "@/d-features/logOut/LogOut";

export const NavigationItems = ({className, mobileView, setOpenMobileMenu}) => {

  return (
    <ul className={className}>
      <NavItems mobileView={mobileView} setOpenMobileMenu={setOpenMobileMenu} />
      <li>
        <LogIn />
      </li>
      <li>
        <LogOut />
      </li>
    </ul>
  )
};
