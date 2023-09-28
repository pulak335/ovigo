import Image from "next/image";
import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import location from "../../assets/direction(1) 1.png";
import offerCard from "../../assets/exploreBanner.png";
const HotelDetailsCard = ({ hotelData }) => {
  console.log(hotelData);
  return (
    <div className="w-full h-max bg-white rounded-md p-4 shadow-lg border mt-6">
      <div className="relative">
        <div className="w-full h-52">
          <Image
            src={
              hotelData?.room_main_image
                ? hotelData?.room_main_image
                : offerCard
            }
            alt="offer card"
            className="rounded-md"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#FDB022] flex items-center justify-center absolute right-4 top-5 cursor-pointer">
          <BsFillHeartFill color="#fff" size="24px" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center justify-start gap-3">
          <h2 className="text-[24px] text-[#101828] font-semibold">
            {hotelData?.place_name}
          </h2>
          <Image src={location} alt={location} width={24} height={24} />
          <h2 className="text-[#26DE81] text-sm font-semibold">
            {hotelData?.spot_to_hotel_distance} Km From Your Spot
          </h2>
        </div>
        <span className="flex gap-x-2 items-center">
          <FaStar className="text-[#FDB022]" />
          <p>{hotelData?.ratting}</p>
        </span>
      </div>
      <div className="mt-2">
        <p className="text-[#5F646F] text-sm font-semibold">
          {hotelData?.street_name}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[#101828] font-bold text-base">
          {hotelData?.room_price} bdt/ per
        </p>
        <Link href={`/hotel-details/${hotelData?._id}`} className="mainBtn">
          Go Details
        </Link>
      </div>
    </div>
  );
};

export default HotelDetailsCard;
