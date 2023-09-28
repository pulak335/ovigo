import Image from "next/image";
import emergency from "../../../assets/home/emergency.png";
const Emergency = () => {
  return (
    <section className="px-2">
      <div className="container">
        <div className="px-2 py-5 lg:pl-10 lg:py-14 bg-[#E0EAFC] shadow-md rounded">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            <div className="">
              <h1 className="text-[48px] text-[#101828]">
                <span className="font-normal">Get</span>{" "}
                <b className="font-bold ml-2">Special and Emergency</b>
                <br />
                <span className="font-semibold">Movement</span>
              </h1>
              <p className="text-[#475467] text-base w-3/4 my-4">
                Join at best deals in your emergency situation with our budget
                friendly packages and track live fare listing.
              </p>
              <button className="px-7 py-3 text-[#101828] font-semibold capitalize bg-[#26DE81] hover:bg-[#1fca74] rounded">
                Live Free Details
              </button>
            </div>
            <div className="">
              <Image src={emergency} alt="Emergency Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
