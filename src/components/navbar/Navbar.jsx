import { Link } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img loading="lazy" src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>bloglog</span>
      </Link>
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}
