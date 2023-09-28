import HotelTabBanner from "@/components/AllTabsContent/HotelTabComponents/HotelTabBanner";
import RootLayout from "@/components/Layout/RootLayout";

const Home = () => {
  return (
    <div>
      <HotelTabBanner />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
