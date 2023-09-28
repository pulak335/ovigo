import TrendingHotelsCard from "@/components/Card/TrendingHotelsCard";
import DetailsService from "@/components/ExploreDetailsPage/DetailsService";
import DetailsTab from "@/components/ExploreDetailsPage/DetailsTab";
import TravelerReview from "@/components/ExploreDetailsPage/TravelerReview";
import RootLayout from "@/components/Layout/RootLayout";
import ExploreTab from "@/components/explorePage/ExploreTab/ExploreTab";
import ExploreFeatureContainer from "@/components/singleExplorePage/ExploreFeatureContainer/ExploreFeatureContainer";
import ExploreTitle from "@/components/singleExplorePage/ExploreTitle/ExploreTitle";
import FaqContainer from "@/components/singleExplorePage/FAQ/FaqContainer";

import Head from "next/head";
import { useRouter } from "next/router";

const ExploreDetailsPage = ({ singlePlace }) => {
  const place = singlePlace.data;

  console.log(place);

  return (
    <>
      <Head>
        <title>Discover Details | Intelligent Dive</title>
      </Head>
      <ExploreTitle place={place} />
      <ExploreFeatureContainer place={place} />
      <div className="container my-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
          <div className="lg:col-span-3">
            <DetailsTab place={place} />
            <DetailsService place={place} />
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-base font-bold text-center">
              Trending Hotels From This Location
            </h2>
            <TrendingHotelsCard />
            <TrendingHotelsCard />
            <TrendingHotelsCard />
            <TrendingHotelsCard />
          </div>
        </div>
      </div>
      <div className="bg-white lg:py-10">
        <div className="container my-6">
          <h2 className="text-center text-4xl text-[#101828] font-semibold mb-6">
            {"Traveler's"} Review
          </h2>
          <TravelerReview />
        </div>
      </div>
      <FaqContainer />
    </>
  );
};

export default ExploreDetailsPage;

ExploreDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://159.223.78.171:5000/allPlaces`);
  const places = await res.json();

  const paths = places?.data?.map((place) => ({
    params: { id: place._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://159.223.78.171:5000/allPlaces/${params.id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      singlePlace: data,
    },
  };
};
