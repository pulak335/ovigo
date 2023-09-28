import VerifyOtp from "@/components/Authentication/VerifyOtp";
import RootLayout from "@/components/Layout/RootLayout";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const params = useSearchParams();
    const email = params.get('email');
    console.log(email)
    return (
        <div>
           <VerifyOtp email={email} />
        </div>
    );
};

export default Page;

Page.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };