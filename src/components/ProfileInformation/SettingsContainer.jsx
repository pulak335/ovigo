import { BiEdit } from "react-icons/bi";

const SettingsContainer = () => {
  return (
    <div className="my-6">
      <div className="border-t-[3px] bg-white border-[#0A7B76] shadow-md ">
        <div className="pt-[24px] pb-[17px] px-[24px] border-b">
          <h2 className="text-secondary text-[30px] font-bold">Settings</h2>
          <p className="text-base text-[#475467] font-normal mt-2">
            Manage your email address, mobile number and password
          </p>
        </div>
        {/* //*name field*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Email ID :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <p className="text-secondary text-base font-normal">
              Jahangir@gmail.com
            </p>
          </div>
        </div>

        {/* //*Phone No*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Phone no :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <p className="text-secondary text-base font-normal">017520461521</p>
          </div>
        </div>

        {/* //*Password*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary min-w-[250px] ">
            Password :
          </p>
          <div className="flex gap-2 md:gap-4  md:flex-row justify-between w-full">
            <p className="text-secondary text-base font-medium">*********</p>
            <BiEdit className="text-[#0A7B76] text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContainer;
