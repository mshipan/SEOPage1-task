import ParentTaskCard from "../components/ParentTaskCard";

const Home = () => {
  return (
    <div className="">
      <div className="w-[95vw] h-[85vh] overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-blue-500 scrollbar-track-slate-300">
        <div className="flex gap-2 w-[150vw] ">
          <ParentTaskCard
            taskBarTitile="Incomplete"
            taskBarColor="bg-red-600"
          />
          <ParentTaskCard taskBarTitile="To Do" taskBarColor="bg-sky-500" />
          <ParentTaskCard taskBarTitile="Doing" taskBarColor="bg-yellow-400" />
          <ParentTaskCard taskBarTitile="Under Review" />
          <ParentTaskCard taskBarTitile="Completed" />
          <ParentTaskCard taskBarTitile="Overdelay" />
        </div>
      </div>
    </div>
  );
};

export default Home;
