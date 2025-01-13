import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";

export const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <Header />
      <Outlet />
    </div>
  )
};