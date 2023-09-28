import toast from "react-hot-toast";
import { AiTwotoneStar } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineNoMeetingRoom } from "react-icons/md";
import { PiDatabaseThin } from "react-icons/pi";

const DetailsForm = ({ singleHotel }) => {
  const handleOnSubmit = () => {
    toast.success("Please Add Payment");
  };
  return (
    <div className="w-full">
      <div className="bg-[#F2F4F7] p-3 border border-gray-500 rounded-md">
        <h3 className="text-lg font-semibold">Traveler</h3>
        <div className="flex items-center gap-2">
          <HiOutlineUserGroup />
          <input
            type="text"
            placeholder="add member"
            className="outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="bg-[#F2F4F7] p-3 border border-gray-500 rounded-md mt-2">
        <h3 className="text-lg font-semibold">Booking date</h3>
        <div className="flex item-center justify-between">
          <input type="date" className="outline-none bg-transparent" />
          <h3>to</h3>
          <input type="date" className="outline-none bg-transparent" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#F2F4F7] p-3 border border-gray-500 rounded-md mt-2">
          <h3 className="text-lg font-semibold">Room type</h3>
          <div className="flex items-center gap-1">
            <MdOutlineNoMeetingRoom />
            <input
              type="text"
              defaultValue={singleHotel?.stay_type}
              className="outline-none bg-transparent w-full"
            />
          </div>
        </div>
        <div className="bg-[#F2F4F7] p-3 border border-gray-500 rounded-md mt-2">
          <h3 className="text-lg font-semibold">Room name</h3>
          <div className="flex items-center gap-1">
            <MdOutlineNoMeetingRoom />
            <input
              type="text"
              defaultValue={singleHotel?.room_name}
              className="outline-none bg-transparent w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 mt-10">
        <PiDatabaseThin />
        <h3>03 Vromon coin</h3>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h3>
          <strong className="text-3xl">৳5800</strong>{" "}
          <span className="text-[#DF2303]">৳6000</span> Per Room
        </h3>
        <h3 className="flex items-center gap-2">
          {" "}
          <AiTwotoneStar color="#FFBF19" />
          4.5/5
        </h3>
      </div>
      <div className="mt-4 ">
        <button className="btn w-full" onClick={handleOnSubmit}>
          Search Location
        </button>
      </div>
    </div>
  );
};

export default DetailsForm;
