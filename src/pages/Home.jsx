import ParentTaskCard from "../components/ParentTaskCard";

const Home = () => {
  return (
    <div className="">
      <div className="w-[95vw] h-[85vh] overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-blue-500 scrollbar-track-slate-300">
        <div className="flex gap-2 w-[150vw]">
          <ParentTaskCard />
          <ParentTaskCard />
          <ParentTaskCard />
          <ParentTaskCard />
          <ParentTaskCard />
          <ParentTaskCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
