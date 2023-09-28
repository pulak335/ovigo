import TicketBookingForm from "@/components/shared/TicketBookingForm/TicketBookingForm";
import Link from "next/link";

const TicketBanner = () => {
  return (
    <div className="container">
      <div className="banner rounded-xl lg:py-20 lg:px-24 p-5 relative">
        <div className="">
          <div className="flex items-center mb-5 flex-col ">
            <div className="text-center">
              <h2 className="text-[#FBFBFB] text-[48px] font-bold">
                Lets step out to roam
              </h2>
              <div className="mt-8">
                <Link href="/explore">
                  <button className="bg-[#26DE81] hover:bg-[#0FB8B1] duration-300 text-white px-6 py-3 rounded-xl">
                    Discover Locations
                  </button>
                </Link>
                <Link href="" className="text-white underline text-lg ml-10">
                  Find Your Tour
                </Link>
              </div>
            </div>
          </div>
          {/* //TicketBookingForm start  */}
          <TicketBookingForm />
        </div>
      </div>
    </div>
  );
};

export default TicketBanner;
