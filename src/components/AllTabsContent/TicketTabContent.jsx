import BestPlace from "../home/BestPlace/BestPlace";
import Community from "../home/Community/Community";
import Emergency from "../home/Emergency/Emergency";
import OfferSlider from "../home/OfferSlider/OfferSlider";
import TicketBanner from "../home/ServiceTabs/Tickets/TicketBanner";
import ShopCard from "../home/ShopCard/ShopCard";

const TicketTabContent = () => {
  return (
    <div>
      <TicketBanner />
      <Community />
      <OfferSlider />
      <BestPlace />
      <Emergency />
      <ShopCard />
    </div>
  );
};

export default TicketTabContent;
