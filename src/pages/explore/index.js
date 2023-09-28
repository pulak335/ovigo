import RootLayout from "@/components/Layout/RootLayout";
import BestActivity from "@/components/explorePage/BestActivity/BestActivity";
import BestOfCouple from "@/components/explorePage/BestOfCouple/BestOfCouple";
import CoveringAll from "@/components/explorePage/CoveringAll/CoveringAll";
import CoveringLocation from "@/components/explorePage/CoveringLocation/CoveringLocation";
import ExploreBanner from "@/components/explorePage/ExploreBanner/ExploreBanner";
import ExploreTab from "@/components/explorePage/ExploreTab/ExploreTab";
import NewPageExplore from "@/components/explorePage/NewPageExplore/NewPageExplore";
import ShopCard from "@/components/home/ShopCard/ShopCard";

import Head from "next/head";

const ExplorePage = ({ allExploreData }) => {
  console.log(allExploreData);
  return (
    <>
      <Head>
        <title>Discover | Intelligent Dive</title>
      </Head>
      {/* <ExploreTab /> */}
      <ExploreBanner />
      <CoveringLocation allExploreData={allExploreData} />
      <CoveringAll allExploreData={allExploreData} />
      <ShopCard />
      {/* <NewPageExplore allExploreData={allExploreData} /> */}
      {/* <BestOfCouple allExploreData={allExploreData} /> */}
      {/* <BestActivity allExploreData={allExploreData} /> */}
    </>
  );
};

export default ExplorePage;

ExplorePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://159.223.78.171:5000/allPlaces");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allExploreData: data.data,
    },
  };
};
