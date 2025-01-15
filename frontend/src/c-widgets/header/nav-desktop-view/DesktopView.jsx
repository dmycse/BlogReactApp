import { NavigationItems } from "@/c-widgets/header/nav-items/NavigationItems";


export const DesktopView = () => {
  return (
    <nav className="hidden md:flex">
      <NavigationItems className="flex items-center gap-2 xl:gap-6 font-medium" />
    </nav>
  )
};