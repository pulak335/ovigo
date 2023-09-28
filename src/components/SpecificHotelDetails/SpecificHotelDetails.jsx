import DetailsTab from "./DetailsTab";
import HeroSec from "./HeroSec";
import HotelDetailsContent from "./HotelDetailsContent;";

const SpecificHotelDetails = ({ singleHotel }) => {
  console.log(singleHotel);
  return (
    <div className="container">
      <HeroSec singleHotel={singleHotel} />
      <HotelDetailsContent singleHotel={singleHotel} />
      <div className="grid grid-cols-12">
        {/* <div className="col-span-8">
          {" "}
          <DetailsTab singleHotel={singleHotel} />
        </div> */}
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default SpecificHotelDetails;
