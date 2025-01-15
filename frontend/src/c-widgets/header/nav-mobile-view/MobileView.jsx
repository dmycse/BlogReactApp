import { useState } from "react";
import { NavigationItems } from "@/c-widgets/header/nav-items/NavigationItems";
import { Menu } from "lucide-react";

export const MobileView = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="cursor-pointer text-2xl"
        onClick={() => setOpenMobileMenu(prev => !prev)}
      >
        {openMobileMenu ? "X" : <Menu className="w-8 h-8" />}
      </button>
      <nav 
        className={`pt-10 w-full h-screen bg-purple-200 
                    absolute top-16 ${openMobileMenu ? "right-0" : "-right-[100%]"}
                    transition-all ease-in-out`}
      >
        <NavigationItems className="flex flex-col items-center gap-8 font-medium" />
      </nav>
    </div>
  )
};