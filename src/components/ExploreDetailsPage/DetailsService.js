import { useEffect, useState } from "react";
import HotelDetailsCard from "../Card/HotelDetailsCard";
import DetailsHotelTab from "./DetailsHotelTab";
import DetailsServiceTab from "./DetailsServiceTab";

const DetailsService = ({ place }) => {
  // console.log(place);

  const place_name = place?.place_name;
  const [hotelDatas, setHotelDatas] = useState([]);
  const [stay_type, setStayType] = useState("");

  useEffect(() => {
    fetch(
      `http://159.223.78.171:5000/allStays/${place_name}?stay_type=${stay_type}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("all data : ", data);
        setHotelDatas(data?.data);
      });
  }, [place_name, stay_type]);

  return (
    <div>
      <DetailsServiceTab />
      <DetailsHotelTab setStayType={setStayType} hotelDatas={hotelDatas} />
      <div className="bg-[#FBFBFB]">
        <div className="py-6 px-6">
          <h2 className="text-[#101828] text-2xl font-medium">{stay_type}</h2>
          <p className="text-[#5F646F] text-sm">{place_name}</p>
        </div>
        <div className="border-t border-gray-300 grid lg:grid-cols-2 lg:gap-5 grid-cols-1">
          {hotelDatas.length > 0 ? (
            <>
              {hotelDatas.map((hotelData) => (
                <HotelDetailsCard key={hotelData._id} hotelData={hotelData} />
              ))}
            </>
          ) : (
            <>
              <h2 className="text-lg text-center  font-semibold mt-5">
                No hotel Found
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
