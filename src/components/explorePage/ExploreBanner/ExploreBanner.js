import Link from "next/link";

import { useState } from "react";
import ExploreSearchForm from "../ExploreSearchForm/ExploreSearchForm";
import SearchPlaceContainer from "../SearchPlaceContainer/SearchPlaceContainer";

const ExploreBanner = () => {
  const [searchValue, setSearchValue] = useState({});
  const [division, setDivision] = useState("");
  const [districtValue, setDistrictValue] = useState("");
  const [destination, setDestination] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [show, setShow] = useState(false);

  // * search functionality start
  const handleSearch = () => {
    fetch("http://159.223.78.171:5000/searchSuggetions/getAllPlaceSearch", {
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
          setDestination("");
          setLocationValue("");
          setShow(true);
          setSearchedResult(data?.data);
        }
      });
  };

  return (
    <div className="mx-auto container mb-24">
      <div className="exploreBanner lg:max-h-[468px]">
        <div className="lg:py-20 lg:px-24 p-3 relative">
          <div className="flex items-center mb-5 flex-col ">
            <div className="text-center">
              <h2 className="text-[#FBFBFB] text-[32px] md:text-[48px] font-bold">
                Explore the Beauty of Nature
              </h2>
              <div className="mt-5 md:mt-8">
                <Link
                  href=""
                  className="text-white underline text-xl hover:text-gray-300"
                >
                  Find Your Tour
                </Link>
              </div>
            </div>
          </div>

          <ExploreSearchForm
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
          <SearchPlaceContainer searchedResult={searchedResult} show={show} />
        </div>
      )}
    </div>
  );
};

export default ExploreBanner;
