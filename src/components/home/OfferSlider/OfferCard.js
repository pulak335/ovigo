import Image from "next/image";
import { FaCalendar, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import offerCard from "../../../assets/home/offer-card-1.png";
import profile from "../../../assets/home/profile.png";


const OfferCard = () => {
  return (
    

        <div className="w-[448px] h-[544px] bg-white rounded-md p-4 shadow-lg border">
          <Image src={offerCard} alt="offer card" className="rounded-md" />
          <div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-[24px] text-[#101828] font-semibold">
                Nature Daughter
              </h2>
              <span className="flex gap-x-2">
                <FaStar className="text-[#FDB022]" />
                <b>4.9</b>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center mt-4">
                <Image src={profile} alt="profile" />
                <div>
                  <p className="text-[#1D2939] font-medium text-lg">
                    Olivia Rahaman
                  </p>
                  <span className="text-[#475467] font-normal text-base">
                    Manager
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 inline-block text-[#9F1AB1] text-sm bg-[#FBE8FF] rounded text-center font-medium">
                Ovigo Featured
              </span>
            </div>
            <div className="flex justify-between items-center mt-5">
              <span className="flex gap-x-2 items-center text-[#344054] text-base font-medium">
                <FaCalendar /> 24July - 28July
              </span>
              <p className="text-[#101828] font-bold text-base">
                6799 <small className="font-medium">bdt/per</small>
              </p>
            </div>
          </div>
        </div>

       
  );
};

export default OfferCard;
