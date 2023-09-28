import RootLayout from "@/components/Layout/RootLayout";
import BestPlace from "@/components/home/BestPlace/BestPlace";
import Community from "@/components/home/Community/Community";
import Emergency from "@/components/home/Emergency/Emergency";
import OfferSlider from "@/components/home/OfferSlider/OfferSlider";
import ServiceTabs from "@/components/home/ServiceTabs/ServiceTab/ServiceTabs";
import TicketBanner from "@/components/home/ServiceTabs/Tickets/TicketBanner";
import ShopCard from "@/components/home/ShopCard/ShopCard";
import ScrollToTop from "@/components/shared/scrollToTop/ScrollToTop";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home | Intelligent Dive</title>
      </Head>
      <TicketBanner />
      <Community />
      <OfferSlider />
      <BestPlace />
      <Emergency />
      <ShopCard />
      <ScrollToTop />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
