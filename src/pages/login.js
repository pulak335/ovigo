import Login from "@/components/Authentication/Login";
import RootLayout from "@/components/Layout/RootLayout";

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
