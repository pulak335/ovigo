import DetailsForm from "./DetailsForm";
import DetailsSliderGallery from "./DetailsSliderGallery";

const HotelDetailsContent = ({ singleHotel }) => {
  console.log("hero details", singleHotel);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-5">
        {/* Explore Gallery */}
        <div className="lg:col-span-5">
          <DetailsSliderGallery singleHotel={singleHotel} />
        </div>
        {/* Explore Feature */}
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-2xl w-full lg:mt-5 mt-3">
            <DetailsForm singleHotel={singleHotel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsContent;
