import { useState } from "react";
import { FaBus, FaTrain } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";

const TicketVehicleTab = () => {
  const [activeTab, setActiveTab] = useState("bus");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="mb-6">
      <ul className="flex items-center gap-10">
        <li
          onClick={() => handleTabClick("bus")}
          className={
            activeTab === "bus"
              ? "flex items-center font-medium text-base gap-2 text-[#0FB8B1] cursor-pointer "
              : "flex items-center font-medium cursor-pointer gap-2 text-[#26de81] text-base"
          }
        >
          <FaBus /> Bus
        </li>
        <li
          onClick={() => handleTabClick("flight")}
          className={
            activeTab === "flight"
              ? "flex items-center font-medium text-base gap-2 text-[#0FB8B1] cursor-pointer"
              : "flex items-center font-medium cursor-pointer gap-2 text-[#26de81] text-base"
          }
        >
          <MdOutlineFlightTakeoff /> Flight
        </li>
        <li
          onClick={() => handleTabClick("train")}
          className={
            activeTab === "train"
              ? "flex items-center font-medium text-base gap-2 text-[#0FB8B1] cursor-pointer"
              : "flex items-center font-medium cursor-pointer gap-2 text-[#26de81] text-base"
          }
        >
          <FaTrain /> Train
        </li>
      </ul>
    </div>
  );
};

export default TicketVehicleTab;
