import { NavItems } from "@/shared/ui/navItems/NavItems";
import { LogIn } from "@/features/logIn/LogIn";
import { LogOut } from "@/features/logOut/LogOut";

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
