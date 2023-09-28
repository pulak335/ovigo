import RootLayout from "@/components/Layout/RootLayout";

const HotelsPage = () => {
  return (
  <div>
    <div></div>
  </div>
    );
};

export default HotelsPage;

HotelsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
