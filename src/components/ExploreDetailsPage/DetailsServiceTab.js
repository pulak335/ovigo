import { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BiHappy, BiHomeAlt } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";

const DetailsServiceTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="overflow-x-hidden flex lg:justify-between py-3 mb-4 flex-wrap">       
          <ul className={`flex gap-3 overflow-x-scroll tabContainerWrapper flex-wrap`}>
            <li
              onClick={() => handleTabClick("tab1")}
              className={
                activeTab === "tab1"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <HiOutlineTicket className="text-base]" /> Stays
            </li>
            <li
              onClick={() => handleTabClick("tab2")}
              className={
                activeTab === "tab2"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <BiHomeAlt /> Foods
            </li>

            <li
              onClick={() => handleTabClick("tab3")}
              className={
                activeTab === "tab3"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <SlHandbag /> Services
            </li>
            <li
              onClick={() => handleTabClick("tab4")}
              className={
                activeTab === "tab4"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <BsCameraVideo /> Nearby places
            </li>
            <li
              onClick={() => handleTabClick("tab5")}
              className={
                activeTab === "tab5"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#101828] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <AiOutlineCar /> Emergency
            </li>
            <li
              onClick={() => handleTabClick("tab6")}
              className={
                activeTab === "tab6"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-6 py-2  rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap"
                  : "flex items-center gap-x-2  px-6 py-2 border border-[#105D36] text-[#105D36] rounded-[8px] text-base  cursor-pointer font-semibold whitespace-nowrap bg-[#EAEAEA]"
              }
            >
              <BiHappy /> Entertainment
            </li>
           
          </ul>              
      </div>
    </div>
  );
};

export default DetailsServiceTab;
