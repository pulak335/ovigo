import Link from "next/link";
import { useState } from "react";
import HotelItem from "./HotelItem";
import HotelSearchForm from "./HotelSearchForm";
import SearchHoletContainer from "./SearchHoletContainer";

const HotelTabBanner = () => {
  const [searchValue, setSearchValue] = useState({});
  const [division, setDivision] = useState("");
  const [districtValue, setDistrictValue] = useState("");
  const [destination, setDestination] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [show, setShow] = useState(false);
  console.log(searchValue);
  // * search functionality start
  const handleSearch = () => {
    fetch("http://159.223.78.171:5000/searchSuggetions/getHotelSearchAll", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(searchValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if ((data.status = "Successfully")) {
          console.log(data);
          setDivision("");
          setDistrictValue("");
          // setDestination("");
          setLocationValue("");
          setShow(true);
          setSearchedResult(data?.data);
        }
      });
  };
  return (
    <div className="container">
      <div className="exploreBanner lg:max-h-[468px]">
        <div className="lg:py-20  p-3 relative">
          <div className="flex items-center mb-5 flex-col ">
            <div className="text-center">
              <h2 className="text-[#FBFBFB] text-[32px] md:text-[48px] font-bold">
                Explore Best Hotels
              </h2>
              <div className="mt-5 md:mt-8">
                <Link
                  href=""
                  className="text-white underline text-xl hover:text-gray-300"
                >
                  Find Your All Hotels
                </Link>
              </div>
            </div>
          </div>
          <HotelSearchForm
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            handleSearch={handleSearch}
            setDivision={setDivision}
            division={division}
            districtValue={districtValue}
            setDistrictValue={setDistrictValue}
            destination={destination}
            setDestination={setDestination}
            setLocationValue={setLocationValue}
            locationValue={locationValue}
          />
        </div>
      </div>
      {show && (
        <div className="">
          <SearchHoletContainer searchedResult={searchedResult} show={show} />
        </div>
      )}
      <div className="lg:mt-44 lg:mb-20 mb-10 mt-20">
        <h2 className="text-secondary text-3xl font-semibold capitalize">
          Book Your favourite Hotel
        </h2>
        <HotelItem />
      </div>
    </div>
  );
};

export default HotelTabBanner;
