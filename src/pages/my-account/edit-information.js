import RootLayout from "@/components/Layout/RootLayout";
import ProfileInformationInput from "@/components/ProfileInformation/ProfileInformationInput";
import ProfileSidebar from "@/components/ProfileInformation/ProfileSidebar";
import SettingsContainer from "@/components/ProfileInformation/SettingsContainer";
import React from "react";

const EditInformation = () => {
  return (
    <div className="container mt-[27px] mx-auto grid grid-cols-1 lg:gap-[62px] lg:grid-cols-8">
      <div className="hidden lg:block col-span-2 border-t-[3px] border-[#0A7B76] ">
        <ProfileSidebar />
      </div>
      <div className="col-span-6 border-t-[3px]  border-[#0A7B76] shadow-md ">
        <ProfileInformationInput />
        <SettingsContainer />
      </div>
    </div>
  );
};

export default EditInformation;

EditInformation.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
