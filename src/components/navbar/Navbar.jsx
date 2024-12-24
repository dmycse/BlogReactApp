import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img loading="lazy" src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>bloglog</span>
      </div>
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}
