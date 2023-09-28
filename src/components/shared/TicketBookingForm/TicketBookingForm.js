import TicketVehicleTab from "@/components/home/TicketVehicleTab/TicketVehicleTab";
import { FaCalendar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";

const TicketBookingForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg px-10 py-8 booking-form-container flex justify-center flex-col">
      {/* tab section */}
      <div>
        <TicketVehicleTab />
      </div>
      {/* form section */}
      <div>
        <div className="flex items-center  lg:justify-between flex-wrap gap-6">
          <div className="flex flex-wrap gap-3">
            <div className="w-[265px] bg-[#F2F4F7] border rounded py-[10px] px-3 ">
              <span className="text-[#101828] text-lg font-medium mb-1">
                Form
              </span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Prefreed Site"
                  className="bg-transparent pl-6 pr-5 py-1 outline-none border-none "
                />
                <span>
                  <HiOutlineMapPin className="absolute left-0 top-3" />
                </span>
              </div>
            </div>
            <div className="bg-[#F2F4F7] border rounded py-[10px] px-3 w-[265px]">
              <div>
                <span className="text-[#101828] text-lg font-medium mb-1">
                  Destination
                </span>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Prefreed Site"
                    className="bg-transparent pl-6 pr-5 py-1 outline-none border-none "
                  />
                  <span>
                    <HiOutlineMapPin className="absolute left-0 top-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F4F7] border rounded py-[10px] px-3 w-[265px]">
            <div>
              <span className="text-[#101828] text-lg font-medium mb-1">
                Travel Date
              </span>
              <div className="relative">
                <input
                  type=""
                  placeholder="Select Date"
                  className="bg-transparent pl-6 pr-5 py-1 outline-none border-none "
                />
                <span>
                  <FaCalendar className="absolute left-0 top-2 text-gray-500" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#26DE81] block text-white px-6 py-3 rounded-xl">
              Search Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingForm;
