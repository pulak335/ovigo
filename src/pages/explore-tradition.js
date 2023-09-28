import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const ExploreTraditionPage = () => {
  return <div>ExploreTraditionPage</div>;
};

export default ExploreTraditionPage;

ExploreTraditionPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
