import HotelDetailsCard from "@/components/Card/HotelDetailsCard";
import axios from "axios";
import { useEffect, useState } from "react";

const HotelItem = () => {
  const [allHotelData, setAllHotelData] = useState([]);
  useEffect(() => {
    axios
      .get("http://159.223.78.171:5000/allStays/allStayShow")
      .then((data) => {
        setAllHotelData(data?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(allHotelData);
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        {allHotelData?.map((hotelData, index) => (
          <HotelDetailsCard hotelData={hotelData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HotelItem;
