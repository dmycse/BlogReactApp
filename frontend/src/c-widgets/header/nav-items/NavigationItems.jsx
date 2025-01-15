import { NavItems } from "@/s-shared/ui/navItems/NavItems";
import { LogIn } from "@/d-features/logIn/LogIn";
import { LogOut } from "@/d-features/logOut/LogOut";

export const NavigationItems = ({className}) => {

  return (
    <ul className={className}>
      <NavItems />
      <li>
        <LogIn />
      </li>
      <li>
        <LogOut />
      </li>
    </ul>
  )
};
