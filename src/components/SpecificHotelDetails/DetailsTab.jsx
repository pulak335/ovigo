import { useState } from "react";
import About from "./About";
import History from "./History";
import TrailGuide from "./TrailGuide";
import Warning from "./Warning";
import Wildlife from "./Wildlife";

const DetailsTab = ({ singleHotel }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="overflow-x-hidden flex justify-between py-3 border-t mt-10">
        <ul className={`flex gap-3 overflow-x-scroll tabContainerWrapper`}>
          <li
            onClick={() => handleTabClick("tab1")}
            className={
              activeTab === "tab1"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400 border-l"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400 border-l"
            }
          >
            About
          </li>
          <li
            onClick={() => handleTabClick("tab2")}
            className={
              activeTab === "tab2"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Facilities
          </li>

          <li
            onClick={() => handleTabClick("tab3")}
            className={
              activeTab === "tab3"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Location
          </li>
          <li
            onClick={() => handleTabClick("tab4")}
            className={
              activeTab === "tab4"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Review
          </li>
        </ul>
      </div>

      {/* tab content start*/}
      <div className="mb-10">
        {activeTab === "tab1" && <About singleHotel={singleHotel} />}
        {activeTab === "tab2" && <History singleHotel={singleHotel} />}
        {activeTab === "tab3" && <Wildlife singleHotel={singleHotel} />}
        {activeTab === "tab4" && <Warning singleHotel={singleHotel} />}
      </div>
    </div>
  );
};

export default DetailsTab;
