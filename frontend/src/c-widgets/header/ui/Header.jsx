import { BrandSection } from "@/s-shared/ui/brandSection/BrandSection";
import { DesktopView } from "@/c-widgets/header/nav-desktop-view/DesktopView";
import { MobileView } from "@/c-widgets/header/nav-mobile-view/MobileView";

export const Header = () => {

  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between">
      <BrandSection />
      <MobileView />
      <DesktopView />
    </header>
  )
};
