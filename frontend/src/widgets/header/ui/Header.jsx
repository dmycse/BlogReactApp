import { BrandSection } from "@/shared/elements/brandSection/BrandSection";
import { DesktopView } from "@/widgets/header/nav-desktop-view/DesktopView";
import { MobileView } from "@/widgets/header/nav-mobile-view/MobileView";

export const Header = () => {

  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between">
      <BrandSection />
      <MobileView />
      <DesktopView />
    </header>
  )
};
