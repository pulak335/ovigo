import VerifyComplete from '@/components/Authentication/VerifyComplete';
import RootLayout from '@/components/Layout/RootLayout';

const Page = () => {
    return (
        <div>
            <VerifyComplete />
        </div>
    );
};

export default Page;

Page.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  