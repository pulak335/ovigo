import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineDown } from "react-icons/ai";
import { BiHappy, BiHomeAlt, BiMessageSquare } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";

const ServiceTabs = () => {
  // const [activeTab, setActiveTab] = useState("tab1"); // Initialize with the default active tab
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [currentX, setCurrentX] = useState(0);
  // !Dragging Tab idea on chatGPT in the name is dragging Horizontal [noyon.podder ei mail]
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  const router = useRouter();
  return (
    <div className="container">
      <div className="flex justify-between items-center my-5">
        <ul
          className={`flex gap-3 overflow-x-scroll tabContainerWrapper flex-wrap`}
        >
          <li
          // onClick={() => handleTabClick("tab1")}
          >
            <Link
              href="/"
              className={
                router.pathname == "/"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <HiOutlineTicket className="text-base]" /> Tickets
            </Link>
          </li>
          <li
          // onClick={() => handleTabClick("tab2")}
          >
            <Link
              href="/hotel-details"
              className={
                router.pathname == "/hotel-details"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiHomeAlt /> Hotel
            </Link>
          </li>

          <li
          // onClick={() => handleTabClick("tab3")}
          >
            <Link
              href="/tours"
              className={
                router.pathname == "/tours"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              {" "}
              <SlHandbag /> Tours
            </Link>
          </li>
          <li
          // onClick={() => handleTabClick("tab4")}
          >
            <Link
              href="/virtual-tour"
              className={
                router.pathname == "/virtual-tour"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BsCameraVideo /> Virtual Tour
            </Link>
          </li>
          <li>
            <Link
              href="/find-tripmate"
              className={
                router.pathname == "/find-tripmate"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiHappy /> Find Tripmate
            </Link>
          </li>
          <li
          // onClick={() => handleTabClick("tab7")}
          >
            <Link
              href="/explore-tradition"
              className={
                router.pathname == "/explore-tradition"
                  ? "bg-[#26de81] text-white border border-[#26de81] flex items-center gap-x-2  px-5 py-2  rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
                  : "flex items-center gap-x-2  px-5 py-2 border border-[#105D36] text-[#105D36] rounded-[16px] text-base  cursor-pointer font-medium whitespace-nowrap"
              }
            >
              <BiMessageSquare /> Explore Tradition
            </Link>
          </li>
        </ul>
        <button className="hidden ml-4 lg:flex items-center gap-x-2 border border-[#26DE81] text-[#26DE81] px-[18px] py-2 rounded-md whitespace-nowrap text-base">
          More Service
          <span>
            <AiOutlineDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceTabs;
