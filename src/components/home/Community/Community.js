import Image from "next/image";
import place from "../../../assets/home/community.png";

const Community = () => {
  return (
    <section className="px-2 mt-10 lg:mt-36">
      <div className="container">
        <div className="bg-[#E9F1F8] lg:flex items-center  gap-x-9 gap-y-6  rounded-md  px-3 lg:px-10 lg:py-14 relative">
          <div className="w-full lg:w-2/4 py-5 lg:py:0">
            <h2 className="text-[#101828] text-[36px] font-bold">
              Find Travel mate and make your trip more memorable
            </h2>
            <p className="text-[#101828] text-xl font-normal mt-5">
              Traveling with a friend leads to discovering new places, creating
              lasting memories, and strengthening the bond of friendship.
            </p>
            <button className="px-5 shadow-sm py-3 mt-10 text-[#fbfbfb] font-semibold capitalize bg-[#0FB8B1] hover:bg-[#0f9691] rounded text-lg">
              Join Community
            </button>
          </div>
          <div className="w-full lg:w-2/4 relative">
            <div className=" mt-5 lg:mt-0 flex justify-center lg:justify-end lg:absolute lg:-bottom-48 lg:right-10">
              <Image src={place} alt="best place" className="relative" />
            </div>
            <div className="hidden lg:block">
              <span className="special-radius absolute -left-20 lg:bottom-36">
                What about Coxs Bazar? 🤩
              </span>
              <span className="special-radius absolute -left-20 top-8">
                “lets go to Thanchi next weekend 🤩
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
