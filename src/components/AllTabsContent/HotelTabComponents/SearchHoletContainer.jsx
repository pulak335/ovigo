import HotelDetailsCard from "@/components/Card/HotelDetailsCard";

const SearchHoletContainer = ({ searchedResult, show }) => {
  console.log(searchedResult);
  return (
    <div
      className={`${show ? "my-10 lg:mt-24  transition-h delay-700" : "mt-0"} `}
    >
      {searchedResult?.length === 0 ? (
        <>
          <h2 className="text-3xl text-center font-semibold text-secondary">
            Nothing Found
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-2xl text-secondary font-semibold">
            Search Result
          </h2>
        </>
      )}

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {searchedResult?.map((hotelData, index) => (
            <HotelDetailsCard hotelData={hotelData} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHoletContainer;
