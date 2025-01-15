import { Link } from "react-router-dom";
import { CustomImage } from "@/s-shared/ui/customImage";

export const BrandSection = () => {
  return (
    <Link to="/" className="flex-1 flex items-center gap-4 text-2xl font-bold">
      <CustomImage 
        src="logo.png" 
        alt="logo" 
        width={32} 
        height={32} 
      />
      
      <span className="text-purple-900">
        DevWoven
      </span>
    </Link>
  )
};