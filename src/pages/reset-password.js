
import ResetPassword from "@/components/Authentication/ResetPassword";
import RootLayout from "@/components/Layout/RootLayout";

const Home = () => {
  return (
    <div> 
      <ResetPassword />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};