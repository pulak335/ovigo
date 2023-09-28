import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/footer-logo.png";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#081634] py-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-y-10 lg:gap-6 md:grid-cols-3 lg:grid-cols-6">
            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">Product</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Solutions
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Tutorials
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Releases
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">Company</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  About us
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Press
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  News
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Media Kit
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">
                Resources
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Newsletter
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Events
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Help center
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Tutorials
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Support
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">
                Use cases
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Startups
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Enterprise
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Government
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  SAAS center
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Ecommerce
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">Social</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Linkedin
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Linkedin
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Dribble
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Github
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#eaeaea] text-sm  ">Legal</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Cookies
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Licenses
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Setting
                </Link>
                <Link
                  href="#"
                  className="text-[#eaeaea] font-normal text-base transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 " />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link href="#">
              <Image src={logo} alt="footer" />
            </Link>

            <p className="mt-4 text-sm text-[#fff] font-normal sm:mt-0 ">
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
        <ScrollToTop />
      </footer>
    </>
  );
};

export default Footer;
