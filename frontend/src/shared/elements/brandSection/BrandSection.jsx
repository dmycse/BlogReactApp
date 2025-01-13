import { Link } from "react-router-dom";
import { CustomImage } from "@/shared/ui/customImage";

export const BrandSection = () => {
  return (
    <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
      <CustomImage 
        src="logo.png" 
        alt="logo" 
        width={32} 
        height={32} 
      />
      
      <span className="text-purple-700">
        DevWoven Blog
      </span>
    </Link>
  )
};