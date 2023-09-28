import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const FindTripmatePage = () => {
  return <div>FindTripmatePage</div>;
};

export default FindTripmatePage;

FindTripmatePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
