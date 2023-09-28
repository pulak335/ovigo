import ForgotPassword from "@/components/Authentication/ForgotPassword";
import RootLayout from "@/components/Layout/RootLayout";

const Home = () => {
    return (
        <div>
            <ForgotPassword />
        </div>
    );
};

export default Home;
Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };