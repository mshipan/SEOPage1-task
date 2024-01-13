import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.png";
import { FaLayerGroup } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaRegComments, FaRegCalendarDays } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const TaskCard = () => {
  return (
    <div className="bg-white p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={user1} alt="user1 image" className="w-7 rounded-full" />
          <h1 className="text-black font-notoSansJP font-medium">
            Client Name
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <img src={user2} alt="user1 image" className="w-7 rounded-full" />
          <h1 className="text-black font-notoSansJP font-medium">
            Sadik Istiak
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaLayerGroup className="text-slate-500" />
          <p className="font-openSans text-slate-900">
            Lorem ipsum dolor sit amet consectetur...
          </p>
        </div>
        <div className=" bg-slate-200 p-1 inline-block">
          <div className="flex items-center gap-1">
            <FaClipboardList className="text-slate-500" />
            <p className="font-openSans text-slate-900">1 / 2</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <img src={user3} alt="User 3 image" className="w-7 h-7 rounded-full" />
        <img src={user4} alt="User 3 image" className="w-7 h-7 rounded-full" />
        <div className="bg-slate-200 inline-block p-1 rounded-full">
          <h1 className="font-notoSansJP text-black">12 +</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaRegComments className="text-slate-500" />
          <p className="font-notoSansJP text-black">15</p>
        </div>
        <div className="flex items-center gap-2">
          <GrAttachment className="text-slate-500" />
          <p className="font-notoSansJP text-black">25</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegCalendarDays className="text-slate-500" />
          <p className="font-notoSansJP text-black">30-12-2022</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
