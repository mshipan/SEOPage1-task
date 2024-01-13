import TaskCard from "./taskCard";

const ParentTaskCard = () => {
  return (
    <div className="bg-slate-200">
      <div className=" flex items-center justify-between p-5">
        <div className="flex items-center gap-1">
          <div className="bg-red-600 w-6 h-6 rounded-s-full"></div>
          <h1 className="font-notoSansJP text-black font-medium">Incomplete</h1>
        </div>
        <div className="bg-slate-300 w-6 h-6 flex items-center justify-center rounded-md">
          <p className="font-notoSansJP text-black ">0</p>
        </div>
      </div>
      <div className="p-2 pb-3 flex flex-col gap-3 max-h-[45rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-blue-700 scrollbar-track-slate-400">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default ParentTaskCard;
