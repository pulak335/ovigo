import { useState } from "react";
import About from "./TouristPlacesDetails/About";
import History from "./TouristPlacesDetails/History";
import TrailGuide from "./TouristPlacesDetails/TrailGuide";
import Warning from "./TouristPlacesDetails/Warning";
import Wildlife from "./TouristPlacesDetails/Wildlife";

const DetailsTab = ({ place }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="overflow-x-hidden flex justify-between py-3">
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
            History
          </li>

          <li
            onClick={() => handleTabClick("tab3")}
            className={
              activeTab === "tab3"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Wildlife
          </li>
          <li
            onClick={() => handleTabClick("tab4")}
            className={
              activeTab === "tab4"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Warning
          </li>
          <li
            onClick={() => handleTabClick("tab5")}
            className={
              activeTab === "tab5"
                ? " text-[#26de81] px-6 py-2 text-base  cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
                : "px-6 py-2 text-[#101828] text-base cursor-pointer font-semibold whitespace-nowrap border-r border-gray-400"
            }
          >
            Trail Guide
          </li>
        </ul>
      </div>

      {/* tab content start*/}
      <div className="mb-10">
        {activeTab === "tab1" && <About place={place} />}
        {activeTab === "tab2" && <History place={place} />}
        {activeTab === "tab3" && <Wildlife place={place} />}
        {activeTab === "tab4" && <Warning place={place} />}
        {activeTab === "tab5" && <TrailGuide place={place} />}
      </div>
    </div>
  );
};

export default DetailsTab;
