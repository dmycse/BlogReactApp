import { Link } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { CustomImage } from "../media/CustomImage";

export const Navbar = () => {

  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <CustomImage src="logo.png" alt="logo" width={32} height={32} />
        <span>bloglog</span>
      </Link>
      <MobileMenu />
      <DesktopMenu />
    </header>
  )
}
