import { IoMdClose } from "react-icons/io";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import { FaRegComments, FaRegCalendarDays } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.png";

const Modal = ({ isModalOpen, closeModal }) => {
  return (
    <dialog
      open={isModalOpen}
      className="fixed inset-0 z-10 overflow-y-auto border border-blue-600 transition-all ease-in-out duration-500"
    >
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-white p-2 w-[30rem] z-20">
          {/* Dialog content */}
          <div className="p-3 flex flex-col gap-4 bg-slate-100">
            <div className="flex flex-row items-center justify-between pr-10">
              <h1 className="text-lg font-bold text-black">Task 1</h1>

              <div className="flex items-center gap-2">
                <img
                  src={user1}
                  alt="user1 image"
                  className="w-7 rounded-full"
                />
                <h1 className="text-black font-notoSansJP font-medium">
                  Client Name
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={user2}
                  alt="user1 image"
                  className="w-7 rounded-full"
                />
                <h1 className="text-black font-notoSansJP font-medium">
                  Sadik Istiak
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-black font-openSans text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                corrupti explicabo nostrum. Error laborum veritatis corporis
                atque delectus. Iste, quos?
              </p>
              <div className="flex items-center justify-between">
                <img
                  src={user3}
                  alt="user1 image"
                  className="w-7 h-7 rounded-full"
                />
                <img
                  src={user4}
                  alt="user1 image"
                  className="w-7 rounded-full"
                />

                <div className="flex items-center gap-2">
                  <GrAttachment className="text-slate-600" />
                  <p className="text-black font-notoSansJP">25</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComments className="text-slate-600" />
                  <p className="text-black font-notoSansJP">15</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCalendarDays className="text-slate-600" />
                  <p className="text-black font-notoSansJP">30-12-2022</p>
                </div>
              </div>
            </div>
          </div>
          {/* ... add your attachment content here ... */}
          <button
            className=" absolute top-1 right-1 z-50 bg-blue-500 text-white p-2 rounded-full"
            onClick={closeModal}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
