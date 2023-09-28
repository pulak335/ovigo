import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import AuthProvider from "@/Context/AuthProvider";
const RootLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default RootLayout;
