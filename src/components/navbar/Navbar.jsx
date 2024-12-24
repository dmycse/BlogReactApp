import { useState } from "react";

export const Navbar = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
 
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>bloglog</span>
      </div>
       
      <div className="md:hidden">
        <div className="">
          {openMobileMenu ? "X" : "Menu"}
        </div>
      </div>
      
      <div className="hidden md:flex">
        Desktop menu
      </div>

    </div>
  )
}
