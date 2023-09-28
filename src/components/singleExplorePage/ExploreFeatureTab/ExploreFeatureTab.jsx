import Image from "next/image";
import discover from "../../../assets/discover.png";
import drum from "../../../assets/icon/drum.png";
import hiking from "../../../assets/icon/hiking.png";
import map from "../../../assets/icon/map.png";
import direction from "../../../assets/icon/map2.png";
import picture from "../../../assets/icon/picture.png";
import rainy from "../../../assets/icon/rainy-day.png";

const ExploreFeatureTab = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center lg:gap-5 gap-3">
        <div className="border border-[#26DE81] shadow-lg rounded-xl  flex justify-center items-center flex-col cursor-pointer w-[150px] h-[100px]">
          <Image src={picture} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            Overview
          </h2>
        </div>
        <div className="border rounded  flex justify-center items-center flex-col cursor-pointer w-[140px] h-[100px]">
          <Image src={direction} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            Direction
          </h2>
        </div>
        <div className="border rounded  flex justify-center items-center flex-col cursor-pointer w-[140px] h-[100px]">
          <Image src={drum} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            Tradition
          </h2>
        </div>
        <div className="border rounded  flex justify-center items-center flex-col cursor-pointer w-[140px] h-[100px]">
          <Image src={map} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            3D inside maps
          </h2>
        </div>
        <div className="border rounded  flex justify-center items-center flex-col cursor-pointer w-[140px] h-[100px]">
          <Image src={rainy} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            Weather Update
          </h2>
        </div>
        <div className="border rounded  flex justify-center items-center flex-col cursor-pointer w-[140px] h-[100px]">
          <Image src={hiking} alt="" width={40} height={40} />
          <h2 className="text-[#101828] text-base font-medium mt-3">
            Thinks to do
          </h2>
        </div>
      </div>
      <div className=" mt-3">
        <div className="bg-[#23ca74b0] mb-3 rounded-2xl flex w-full items-center gap-6 px-2 py-px">
          <div className="relative">
            <Image src={discover} alt="" className="object-cover" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg text-black mb-3">
              Explore with VR
            </h2>
            <button className="bg-[#23CA75] text-white rounded-[15px] py-[4px] px-[16px] text-sm font-bold">
              play new
            </button>
          </div>
        </div>
        <div className=" bg-[#0B837E] rounded-2xl flex w-full items-center gap-6 px-2 py-px">
          <div className="relative">
            <Image src={discover} alt="" className="object-cover" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg text-white mb-3">Discover 360</h2>
            <button className="bg-[#23CA75] text-white rounded-[15px] py-[4px] px-[16px] text-sm font-bold">
              view new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeatureTab;
