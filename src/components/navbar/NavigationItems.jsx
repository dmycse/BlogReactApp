import { Link } from "react-router-dom";
import { menuItems } from "../../constants/constants";
import { LogIn } from "lucide-react";

export const NavigationItems = ({className}) => {
  return (
    <ul className={className}>
      {menuItems.map(item => (
        <li key={item.id} className="px-5 py-2 hover:bg-purple-500 hover:text-white rounded-md">
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
      <li>
        <button className="py-2 px-4 flex items-center gap-2 text-white rounded-md bg-purple-400 hover:bg-purple-600">
          <LogIn /> Login
        </button>
      </li>
    </ul>
  )
}
