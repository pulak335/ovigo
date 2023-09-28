import RootLayout from "@/components/Layout/RootLayout";

const ToursPage = () => {
  return <div>ToursPage</div>;
};

export default ToursPage;

ToursPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
