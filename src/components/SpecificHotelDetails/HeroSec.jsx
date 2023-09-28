import { BsHeart, BsUpload } from "react-icons/bs";

const HeroSec = ({ singleHotel }) => {
  return (
    <div className="border-b px-2">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col ">
          <h2 className="text-[24px] lg:text-[36px] font-medium text-[#101828] ">
            {singleHotel?.hotel_name}
          </h2>
          <p className="text-base text-[#5F646F] font-normal mt-3 mb-4">
            {singleHotel?.division}, Bangladesh
          </p>
        </div>
        <div className="flex gap-8 cursor-pointer pb-4 lg:pb-0">
          <div className="flex items-center gap-3 ">
            <BsUpload className="text-[#101828] text-xl " />
            <span className="text-[#101828] text-base font-semibold">
              Share
            </span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <BsHeart className="text-[#101828] text-xl " />
            <span className="text-[#101828] text-base font-semibold">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
