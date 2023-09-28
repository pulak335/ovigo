import { districts } from "@/components/data/districts";
import { divisions } from "@/components/data/divisions";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiOutlineMapPin } from "react-icons/hi2";
import style from "./HotelSearchForm.module.css";

const HotelSearchForm = ({
  searchValue,
  setSearchValue,
  handleSearch,
  division,
  setDivision,
  districtValue,
  setDistrictValue,
  locationValue,
  setLocationValue,
}) => {
  // division state
  const [divisionToggleIcon, setDivisionToggleIcon] = useState(false);
  const [divisionId, setDivisionId] = useState(null);

  // district state
  const [districtToggleIcon, setDistrictToggleIcon] = useState(false);
  const [allDistricts, setAllDistricts] = useState([]);

  //location state
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [subDistrictToggleIcon, setSubDistrictToggleIcon] = useState(false);

  console.log(searchTerm);
  //search value inner the state : district, division, location,

  //* location search api
  useEffect(() => {
    if (searchTerm) {
      fetch(
        `http://159.223.78.171:5000/searchSuggetions/getHotelSearchSuggestion?term=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSubDistrictValue = (subDistrict) => {
    setSubDistrictToggleIcon(false);
    setSearchValue({
      ...searchValue,
      primary_place_name: subDistrict.primary_place_name,
    });
    setLocationValue(subDistrict?.place_name);
  };

  const handleInputValue = (e) => {
    setSearchTerm(e.target.value);
    setLocationValue(e.target.value);
    setSearchValue({ primary_place_name: e.target.value });
    setSubDistrictToggleIcon(true);
  };

  //*get division value
  const getDivisionValue = (e) => {
    setDivision(e.target.textContent);
    setSearchValue({ ...searchValue, division: e.target.textContent });
    setDivisionToggleIcon(false);
  };

  //*filter district and if get not division when set all district
  useEffect(() => {
    const filteredDistricts = districts.filter(
      (district) => district.division_id === divisionId
    );
    const districtsToDisplay = divisionId ? filteredDistricts : districts;
    setAllDistricts(districtsToDisplay);
  }, [divisionId]);

  const getDistrictValue = (e) => {
    setDistrictValue(e.target.textContent);
    setSearchValue({ ...searchValue, district: e.target.textContent });
    setDistrictToggleIcon(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg px-3 py-8 booking-form-container">
      {/* form section */}
      <div>
        <div className="flex items-center justify-center flex-wrap gap-3">
          <div className="flex justify-center flex-wrap gap-3">
            {/* //* location div section */}
            <div
              className={`w-[210px]  bg-[#F2F4F7] border rounded py-[10px] px-3 `}
            >
              <span className="text-[#101828] text-lg font-medium mb-1">
                Location
              </span>
              <div className="relative overflow-x-hidden">
                <input
                  type="text"
                  onChange={(e) => handleInputValue(e)}
                  value={locationValue}
                  placeholder="Where are you going?"
                  className="bg-transparent pl-6 pr-5 py-1 outline-none border-none "
                />

                {subDistrictToggleIcon && (
                  <ul className="bg-[#f7f7f7] px-2 py-3 text-black rounded-md">
                    {suggestions?.data?.map((subDistrict) => (
                      <li
                        key={subDistrict?._id}
                        // onClick={() => handleDistrict(subDistrict)}
                        className="cursor-pointer"
                      >
                        <span
                          onClick={() => handleSubDistrictValue(subDistrict)}
                        >
                          {subDistrict?.place_name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <span>
                  <HiOutlineMapPin className="absolute left-0 top-3" />
                </span>
              </div>
            </div>

            {/* //* division section */}
            <div className="w-[210px] bg-[#F2F4F7] border rounded py-[10px] px-3 ">
              <div>
                <div className="flex justify-between items-center mt-1 relative">
                  <span className="text-lg font-semibold text-[#101828]">
                    Division
                  </span>
                  {divisionToggleIcon ? (
                    <>
                      <FiChevronUp
                        className="text-[#101828] text-2xl cursor-pointer"
                        onClick={() =>
                          setDivisionToggleIcon(!divisionToggleIcon)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FiChevronDown
                        className="text-[#101828] text-2xl cursor-pointer"
                        onClick={() =>
                          setDivisionToggleIcon(!divisionToggleIcon)
                        }
                      />
                    </>
                  )}
                  {/* //!get division data  */}
                  {divisionToggleIcon && (
                    <ul
                      className={`p-3 px-4 bg-[#f7f7f7] rounded-md w-[210px] h-[250px] overflow-y-scroll ${style.optionContainer}`}
                    >
                      {divisions?.map((division) => (
                        <li
                          key={division.id}
                          onClick={() => setDivisionId(division.id)}
                          className="cursor-pointer text-base my-2"
                        >
                          <span onClick={(e) => getDivisionValue(e)}>
                            {division.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    onChange={(e) =>
                      setSearchValue({
                        ...searchValue,
                        division: e.target.value,
                      })
                    }
                    value={division}
                    placeholder="Select District"
                    className="bg-transparent pl-7 pr-5 py-1 outline-none border-none "
                  />
                  <span>
                    <HiOutlineMapPin className="absolute left-0 top-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* //*district section */}
            <div className="w-[210px] bg-[#F2F4F7] border rounded py-[10px] px-3 ">
              <div>
                <div className="flex justify-between items-center mt-1 relative">
                  <span className="text-lg font-semibold text-[#101828]">
                    District
                  </span>
                  {districtToggleIcon ? (
                    <>
                      <FiChevronUp
                        className="text-[#101828] text-2xl cursor-pointer"
                        onClick={() =>
                          setDistrictToggleIcon(!districtToggleIcon)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FiChevronDown
                        className="text-[#101828] text-2xl cursor-pointer"
                        onClick={() =>
                          setDistrictToggleIcon(!districtToggleIcon)
                        }
                      />
                    </>
                  )}
                  {/* //!get district data  */}
                  {districtToggleIcon && (
                    <ul
                      className={`p-3 px-4 bg-[#f7f7f7] rounded-md w-[210px] h-[250px] overflow-y-scroll ${style.optionContainer}`}
                    >
                      {allDistricts?.map((district) => (
                        <li
                          key={district.id}
                          className="cursor-pointer text-base my-2"
                        >
                          <span onClick={(e) => getDistrictValue(e)}>
                            {district.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    onChange={(e) =>
                      setSearchValue({
                        ...searchValue,
                        district: e.target.value,
                      })
                    }
                    value={districtValue}
                    placeholder="Select District"
                    className="bg-transparent pl-7 pr-5 py-1 outline-none border-none "
                  />
                  <span>
                    <HiOutlineMapPin className="absolute left-0 top-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleSearch()}
              className="bg-[#26DE81] hover:bg-[#0FB8B1] font-semibold duration-300 block text-white px-3 py-2 rounded-xl"
            >
              Search Hotel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchForm;
