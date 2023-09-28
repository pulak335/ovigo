import HotelTabContent from "@/components/AllTabsContent/HotelTabContent";
import { useState } from "react";
import { AiOutlineCar, AiOutlineDown } from "react-icons/ai";
import { BiHappy, BiHomeAlt, BiMessageSquare } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";

const ExploreTab = () => {
  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-[#f1f1f1] pt-3 pb-1">
      <div className="container overflow-x-hidden flex justify-between py-3 mb-4 ">
        <>
          <ul className={`flex gap-3 overflow-x-scroll tabContainerWrapper`}>
            <li
              onClick={() => handleTabClick("tab1")}
              className={
                activeTab === "tab1"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <HiOutlineTicket className="text-base]" /> Tickets
            </li>
            <li
              onClick={() => handleTabClick("tab2")}
              className={
                activeTab === "tab2"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiHomeAlt /> Hotel
            </li>

            <li
              onClick={() => handleTabClick("tab3")}
              className={
                activeTab === "tab3"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <SlHandbag /> Tours
            </li>
            <li
              onClick={() => handleTabClick("tab4")}
              className={
                activeTab === "tab4"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BsCameraVideo /> Virtual Tour
            </li>
            <li
              onClick={() => handleTabClick("tab5")}
              className={
                activeTab === "tab5"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <AiOutlineCar /> Tours
            </li>
            <li
              onClick={() => handleTabClick("tab6")}
              className={
                activeTab === "tab6"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiHappy /> Find Tripmate
            </li>
            <li
              onClick={() => handleTabClick("tab7")}
              className={
                activeTab === "tab7"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiMessageSquare /> Explore Tradition
            </li>
          </ul>
        </>
        <button className="hidden ml-4 lg:flex items-center gap-x-2 border border-[#26DE81] text-[#26DE81] px-[18px] py-2 rounded-md whitespace-nowrap text-base">
          More Service
          <span>
            <AiOutlineDown />
          </span>
        </button>
      </div>

      <div className="container">
        {" "}
        {/* tab content start*/}
        {/* {activeTab === "tab1" && <TicketTabContent />} */}
        {activeTab === "tab2" && <HotelTabContent />}
        {/* {activeTab === "tab3" && <ToursTabContent />} */}
        {/* {activeTab === "tab4" && <VirtualTourTabContent />} */}
        {/* {activeTab === "tab5" && <ToursTabContent />} */}
        {/* {activeTab === "tab6" && <FindTripmateTabContent />} */}
        {/* {activeTab === "tab7" && <ExploreTraditionTabContent />} */}
      </div>
    </div>
  );
};

export default ExploreTab;
