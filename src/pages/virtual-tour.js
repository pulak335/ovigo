import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const VirtualToursPage = () => {
  return <div>VirtualToursPage</div>;
};

export default VirtualToursPage;

VirtualToursPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
