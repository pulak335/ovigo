import { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BiHappy, BiHomeAlt } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";

const DetailsHotelTab = ({ setStayType, hotelData }) => {
  const [activeTab, setActiveTab] = useState("Hotel");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setStayType(tab);
  };
  return (
    <div>
      <div className="overflow-x-hidden flex justify-between py-3 mb-4">
        <ul className={`flex gap-3 overflow-x-scroll tabContainerWrapper`}>
          <li
            onClick={() => handleTabClick("Hotel")}
            className={
              activeTab === "Hotel"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <HiOutlineTicket className="text-base" /> Hotel
          </li>
          <li
            onClick={() => handleTabClick("Resort")}
            className={
              activeTab === "Resort"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <BiHomeAlt /> Resort
          </li>

          <li
            onClick={() => handleTabClick("Guesthouse")}
            className={
              activeTab === "Guesthouse"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <SlHandbag /> Guesthouse
          </li>
          <li
            onClick={() => handleTabClick("Villa")}
            className={
              activeTab === "Villa"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <BsCameraVideo /> Villa
          </li>
          <li
            onClick={() => handleTabClick("Homestay")}
            className={
              activeTab === "Homestay"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <AiOutlineCar /> Homestay
          </li>
          <li
            onClick={() => handleTabClick("Hostel")}
            className={
              activeTab === "Hostel"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <BiHappy />
            Hostel
          </li>
          <li
            onClick={() => handleTabClick("Lodge")}
            className={
              activeTab === "Lodge"
                ? "bg-[#26de81] text-white border border-[#26de81] flex items-center flex-col justify-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                : "flex items-center flex-col justify-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
            }
          >
            <BiHappy /> Lodge
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsHotelTab;
