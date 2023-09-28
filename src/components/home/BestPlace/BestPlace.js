import Image from "next/image";
import place from "../../../assets/home/place.png";

const BestPlace = () => {
  return (
    <section className="lg:mt-44 px-2">
      <div className="container">
        <div className="flex flex-col lg:justify-between   mx-auto rounded-md bg-[#0A7B76] px-3 lg:px-10 py-5 lg:py-[75px] lg:relative">
          <div className="w-full lg:w-2/4 mb-5 lg:mb-0">
            <h2 className="text-[#FBFBFB] text-[36px] font-bold">
              Travelers best choice for stays
            </h2>
            <h6 className="mt-4 text-[24px] text-[#fbfbfb]">
              Our best partners are ready to honur you
            </h6>
            <button className="px-5 shadow-sm py-3 mt-10 text-[#081634] font-semibold capitalize bg-[#FBFBFB] hover:bg-[#bfc2c0] rounded text-lg">
              See All Lists
            </button>
          </div>
          <div className="w-full lg:w-2/4">
            <div className="lg:absolute bottom-0 right-10">
              <Image src={place} alt="best place" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlace;
