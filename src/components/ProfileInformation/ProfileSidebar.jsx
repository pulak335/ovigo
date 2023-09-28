import Image from "next/image";
import profile from "../../assets/6.jpg";
import { BiEdit, BiLogOut, BiMessageAdd } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const ProfileSidebar = () => {
  return (
    <div className="bg-[#f9fafb] shadow-md">
      <div className="pt-6 ">
        <div className="flex justify-center ">
          <div className="w-[160px] h-[160px] relative">
            <Image
              src={profile}
              alt=""
              className="w-[160px] h-[160px] rounded-full border-white border-4 "
            />
            <label htmlFor="file-drop" className="absolute bottom-3 right-5">
              <input type="file" name="" id="file-drop" className="hidden" />
              <BiEdit className="text-[#0A7B76] text-3xl cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <AiOutlineUser />
            </span>
            <span className="text-base font-medium">Profile Info</span>
          </Link>
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <FiUsers />
            </span>
            <span className="text-base font-medium">Travelers Info</span>
          </Link>
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <BsBookmark />
            </span>
            <span className="text-base font-medium">Booking Info</span>
          </Link>
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <BiMessageAdd />
            </span>
            <span className="text-base font-medium">Notification</span>
          </Link>
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <AiOutlineSetting />
            </span>
            <span className="text-base font-medium">Setting</span>
          </Link>
          <Link
            href="/my-account"
            className="flex gap-6 items-center text-[#344054] hover:text-[#0A7B76]  py-4 pl-[18px]"
          >
            <span className="text-xl">
              <BiLogOut />
            </span>
            <span className="text-base font-medium">Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
