import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-white h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
