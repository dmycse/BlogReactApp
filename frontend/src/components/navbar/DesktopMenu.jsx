import { NavigationItems } from "./NavigationItems";

export const DesktopMenu = () => {


  return (
    <nav className="hidden md:flex">
      <NavigationItems className="flex items-center gap-2 xl:gap-10 font-medium"/>
    </nav>
  )
}