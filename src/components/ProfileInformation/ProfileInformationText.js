import { AuthContext } from "@/Context/AuthProvider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";

const ProfileInformationText = () => {
  const { userEmail } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(
      `http://159.223.78.171:5000/getMe/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setUserInfo(data?.data);
      });
  }, [userEmail]);

  return (
    <div className="bg-white">
      <div className="pt-[24px] pb-[17px] px-[24px] border-b flex justify-between items-center">
        <div>
          <h2 className="text-secondary text-[30px] font-bold">Profile Info</h2>
          <p className="text-base text-[#475467] font-normal mt-2">
            Basic info, for a faster booking experience
          </p>
        </div>
        <Link href="my-account/edit-information">
          {" "}
          <BiEdit className="text-[#0A7B76] text-3xl" />
        </Link>
      </div>

      {/* //*name field*/}
      <div className="pt-[24px] gap-7 lg:gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 ">
          Name :
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.name ? userInfo.name : "User Name"}
          </p>
        </div>
      </div>

      {/* //*date of birth field*/}
      <div className="pt-[24px] lg:gap-3 gap-7 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 ">
          Date Of Birth:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.date_birth ? userInfo.date_birth : "N/A"}
          </p>
        </div>
      </div>

      {/* //*National id field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          National ID:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.national_id ? userInfo.national_id : "N/A"}
          </p>
        </div>
      </div>
      {/* //*Gender field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Gender:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.gender ? userInfo.gender : "N/A"}
          </p>
        </div>
      </div>
      {/* //*Present Address field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Present Address:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.present_address ? userInfo.present_address : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Permanent Address field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Permanent Address:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.permanent_address ? userInfo.permanent_address : "N/A"}
          </p>
        </div>
      </div>
      {/* //*Nationality field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Nationality:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.nationality ? userInfo.nationality : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Religion field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Religion:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.religion ? userInfo.religion : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Passport Number field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Passport Number:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.passport_number ? userInfo.passport_number : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Passport Expire field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Passport Expire:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.passport_exp_date ? userInfo.passport_exp_date : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Emergency Contact field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Emergency Contact:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.phone ? userInfo.phone : "N/A"}
          </p>
        </div>
      </div>

      {/* //*Marital Status field*/}
      <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b grid grid-cols-7 lg:grid-cols-3 items-center  ">
        <p className="text-[18px] font-medium text-secondary lg:col-span-1 col-span-3 capitalize">
          Marital Status:
        </p>
        <div className="col-span-4 lg:col-span-2">
          <p className="text-base text-secondary font-normal">
            {userInfo?.marital_status ? userInfo.marital_status : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformationText;
