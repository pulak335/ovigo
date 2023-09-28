import Register from "@/components/Authentication/Register";
import RootLayout from "@/components/Layout/RootLayout";

const RegisterPage = () => {
  return (
    <div> 
      <Register />
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
