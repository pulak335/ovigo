import RootLayout from "@/components/Layout/RootLayout";
import SpecificHotelDetails from "@/components/SpecificHotelDetails/SpecificHotelDetails";

const HotelDetailsPage = ({ singleHotel }) => {
  console.log("hotel details: ", singleHotel);

  return (
    <div>
      <SpecificHotelDetails singleHotel={singleHotel} />
    </div>
  );
};

export default HotelDetailsPage;

HotelDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://159.223.78.171:5000/allStays/singleHotel`);
  const hotels = await res.json();

  const paths = hotels?.data?.map((hotel) => ({
    params: { id: hotel._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `http://159.223.78.171:5000/allStays/singleHotel/${params.id}`
  );
  const data = await res.json();
  console.log("hotel data", data);
  return {
    props: {
      singleHotel: data?.data,
    },
  };
};
