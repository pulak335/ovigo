import { AuthContext } from "@/Context/AuthProvider";
import ServiceTabs from "@/components/home/ServiceTabs/ServiceTab/ServiceTabs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  AiOutlineDown,
  AiOutlineQuestionCircle,
  AiOutlineUp,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import logo from "../../../assets/logo.png";

// import { useRouter } from "next/router";

const Navbar = () => {
  const [accountInfo, setAccountInfo] = useState(false);
  const { userEmail } = useContext(AuthContext);
  console.log(userEmail);
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("ovigoLogInToken");
    router.push("/");
    window.location.reload();
  };
  return (
    <>
      <div className="bg-white pt-3 lg:pb-5 lg:pt-5 pb-3 px-2">
        <div className="text-center py-1 mb-3  flex justify-end gap-3 items-center  md:hidden flex-wrap">
          <span className="icon-bg hidden md:block cursor-pointer">
            <AiOutlineQuestionCircle className="icon" />
          </span>

          <span className="icon-bg hidden md:block cursor-pointer">
            <FaRegBell className="icon " />
          </span>
          <span className="icon-bg hidden md:block cursor-pointer">
            <BsMoon className="icon " />
          </span>
        </div>
        <div className="container ">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} alt="" width={100} height={44} />
              </Link>
            </div>
            <div className="flex items-center lg:gap-x-6 gap-2">
              <button className="flex items-center gap-x-1 capitalize px-[12px] lg:px-[18px] py-[8px] border transition-300 border-[#26DE81] hover:bg-[#26DE81] hover:text-white rounded-md text-[#26DE81] text-base font-semibold">
                get app
                <span>
                  <HiOutlineDevicePhoneMobile />
                </span>
              </button>

              <div className="hidden md:flex items-center gap-x-6">
                <span className="icon-bg cursor-pointer">
                  <AiOutlineQuestionCircle className="icon" />
                </span>

                <span className="icon-bg cursor-pointer">
                  <FaRegBell className="icon" />
                </span>
                <span className="icon-bg cursor-pointer">
                  <BsMoon className="icon" />
                </span>
              </div>
              {/* //!this div missing [lg:flex] this class  */}

              {!userEmail ? (
                <>
                  <div className=" gap-4 flex ">
                    <button className="flex ml-4 lg:flex items-center gap-x-2 bg-[#ECFDF3] border border-[#D0D5DD] duration-300 text-[#26DE81] px-[18px] py-2 rounded-md whitespace-nowrap text-base font-medium hover:bg-transparent hover:text-black hover:bg-[#D0D5DD]">
                      Register Service
                    </button>

                    <Link
                      href="/register"
                      className="bg-[#26DE81] hover:bg-[#0FB8B1] duration-300 text-white px-6 py-3 rounded-md font-semibold"
                    >
                      Create Account
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setAccountInfo(!accountInfo)}
                      className="flex items-center gap-x-4 bg-[#26DE81] hover:bg-[#0FB8B1]  text-white px-[18px] py-[10px] rounded-md text-xl"
                    >
                      <BiUser />
                      <span className="">
                        {accountInfo ? <AiOutlineUp /> : <AiOutlineDown />}
                      </span>
                    </button>

                    {accountInfo && (
                      <ul className="absolute  right-0 top-full mt-1 flex flex-col w-[160px] gap-2 rounded bg-[#fffefe] shadow-md pt-2 pb-3 z-50">
                        <li className="hover:bg-slate-200 px-4 py-1">
                          <Link
                            onClick={() => setAccountInfo(!accountInfo)}
                            href="/my-account"
                            className="text-secondary font-medium text-base"
                          >
                            My Account
                          </Link>
                        </li>
                        <li className="hover:bg-slate-200 px-4 py-1">
                          <Link
                            href="/"
                            className="text-secondary font-medium text-base"
                          >
                            Edit Information
                          </Link>
                        </li>
                        <li
                          className="hover:bg-slate-200 px-4 py-1 cursor-pointer text-secondary font-medium text-base"
                          onClick={() => handleLogOut()}
                        >
                          Logout
                        </li>
                      </ul>
                    )}
                  </div>
                </>
              )}

              {/* //! when a user login this button was visible so display now hidden and must be use "flex" className*/}
            </div>
          </div>
        </div>
      </div>
      <ServiceTabs />
    </>
  );
};

export default Navbar;
