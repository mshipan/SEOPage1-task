import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-white h-screen p-5 md:p-10">
      <h1 className="font-lemon text-3xl text-black mb-2 md:mb-5">
        SEOPage1 Task
      </h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
