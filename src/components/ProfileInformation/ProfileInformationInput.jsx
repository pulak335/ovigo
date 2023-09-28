import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileInformationInput = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const { userEmail, userPhone } = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  useEffect(() => {
    fetch(`http://159.223.78.171:5000/getMe/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setInfo(data?.data);
      });
  }, [userEmail]);

  const onSubmit = (data) => {
    //* input data
    const profileInfo = {
      email: userEmail,
      name: data.firstName + " " + data.lastName,
      date_birth: data.dateOfBirth,
      gender: selectedGender,
      national_id: data.nationalId,
      present_address: data.presentAddress,
      permanent_address: data.permanentAddress,
      nationality: data.nationality,
      religion: data.religion,
      passport_number: data.passportNumber,
      passport_exp_date: data.passportExpire,
      phone: data.code + data.number,
      marital_status: data.marital,
    };
    console.log(profileInfo);
    fetch("http://159.223.78.171:5000/usersReg", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.data?.modifiedCount > 0) {
          reset();
          toast.success("Information Updated");
          router.push("/my-account");
        } else {
          toast.error("Something wen't wrong");
          console.log("data not right");
        }
      })
      .catch((err) => console.log(err));
  };
  const firstName = info?.name;

  console.log(firstName);
  return (
    <div className="bg-white">
      <div className="pt-[24px] pb-[17px] px-[24px] border-b flex justify-between items-center">
        <div>
          <h2 className="text-secondary text-[30px] font-bold">Profile Info</h2>
          <p className="text-base text-[#475467] font-normal mt-2">
            Basic info, for a faster booking experience
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* //*name field*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Name :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name"
              className="border rounded px-3 py-1 outline-none text-secondary] w-[240px]"
            />
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
              className="border rounded px-3 py-1 outline-none text-secondary] w-[240px]"
            />
          </div>
        </div>
        {/* //*Date of birth field*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Date Of Birth :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="date"
              {...register("dateOfBirth")}
              className="border rounded px-3 py-1 outline-none text-secondary] text-gray-500 w-[240px]"
            />
          </div>
        </div>
        {/* //*National ID*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            National ID :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="text"
              {...register("nationalId")}
              placeholder="your NID number"
              className="border rounded px-3 py-1 outline-none text-secondary] placeholder-gray-500 w-[240px]"
            />
          </div>
        </div>

        {/* //*Radio button */}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Gender :
          </p>
          <div className="flex gap-6 md:gap-4 flex-col md:flex-row">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="male"
                id="male"
                value="male"
                checked={selectedGender === "male"}
                onChange={handleGenderChange}
                className="accent-[#0A7B76] w-[12px] h-[12px]"
              />
              <label
                htmlFor="male"
                className="text-[14px] text-[#344054] font-medium"
              >
                Male
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="female"
                id="female"
                value="female"
                checked={selectedGender === "female"}
                onChange={handleGenderChange}
                className="accent-[#0A7B76] w-[12px] h-[12px]"
              />
              <label
                htmlFor="female"
                className="text-[14px] text-[#344054] font-medium"
              >
                Female
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="others"
                id="others"
                value="others"
                checked={selectedGender === "others"}
                onChange={handleGenderChange}
                className="accent-[#0A7B76] w-[12px] h-[12px]"
              />
              <label
                htmlFor="others"
                className="text-[14px] text-[#344054] font-medium"
              >
                others
              </label>
            </div>
          </div>
        </div>

        {/* //*Present Address*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Present Address :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="text"
              defaultValue={info?.present_address}
              {...register("presentAddress")}
              placeholder="your present address"
              className="border rounded px-3 py-1 outline-none text-secondary] placeholder-gray-500 w-full lg:w-[540px]"
            />
          </div>
        </div>

        {/* //*Permanent Address*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Permanent Address :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="text"
              {...register("permanentAddress")}
              defaultValue={info?.permanent_address}
              placeholder="your Permanent address"
              className="border rounded px-3 py-1 outline-none text-secondary] placeholder-gray-500 w-full lg:w-[540px]"
            />
          </div>
        </div>

        {/* //*Nationality */}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Nationality :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <select
              name="nationality"
              id=""
              {...register("nationality")}
              className="border rounded px-3 py-1 outline-none text-gray-500 w-[240px]"
            >
              <option value="bangladeshi" className="capitalize">
                Bangladeshi
              </option>
              <option value="indian" className="capitalize">
                Indian
              </option>
              <option value="chines" className="capitalize">
                Chines
              </option>
              <option value="russian" className="capitalize">
                Russian
              </option>
            </select>
          </div>
        </div>

        {/* //*Religion */}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Religion :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <select
              name="religion"
              id=""
              {...register("religion")}
              className="border rounded px-3 py-1 outline-none text-gray-500 w-[240px]"
            >
              <option value="islam" className="capitalize">
                Islam
              </option>
              <option value="hindu" className="capitalize">
                hindu
              </option>
              <option value="buddho" className="capitalize">
                buddho
              </option>
              <option value="khirstian" className="capitalize">
                khirstian
              </option>
            </select>
          </div>
        </div>

        {/* //*Passport Number*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Passport Number :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="text"
              {...register("passportNumber")}
              placeholder="your passport number"
              className="border rounded px-3 py-1 outline-none text-secondary] placeholder-gray-500 w-[240px]"
            />
          </div>
        </div>

        {/* //*passport expire date*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Passport Expiry Date :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <input
              type="date"
              {...register("passportExpire")}
              className="border rounded px-3 py-1 outline-none text-secondary] text-gray-500 w-[240px]"
            />
          </div>
        </div>

        {/* //*Emergency Contact no*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Emergency Contact :
          </p>
          <div className="flex gap-4 md:gap-4 flex-col md:flex-row">
            <select
              name="phone"
              id=""
              {...register("code")}
              className="border rounded px-3 py-1 outline-none text-gray-500 w-[90px]"
            >
              <option value="+880" className="capitalize">
                +880
              </option>
              <option value="+044" className="capitalize">
                +044
              </option>
              <option value="+255" className="capitalize">
                +255
              </option>
              <option value="+894" className="capitalize">
                +894
              </option>
            </select>

            <input
              type="text"
              {...register("number")}
              defaultValue={userPhone}
              placeholder="170******"
              className="border rounded px-3 py-1 outline-none text-secondary] placeholder-gray-500 w-[200px]"
            />
          </div>
        </div>

        {/* //*Marital status*/}
        <div className="pt-[24px] gap-3 pb-[17px] px-[24px] border-b flex flex-col lg:flex-row lg:items-center ">
          <p className="text-[18px] font-medium text-secondary w-[250px]">
            Marital Status :
          </p>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <select
              name="phone"
              id=""
              {...register("marital")}
              className="border rounded px-3 py-1 outline-none text-gray-500 w-[120px]"
            >
              <option value="married" className="capitalize">
                Married
              </option>
              <option value="single" className="capitalize">
                single
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-6 items-center pt-[24px] pb-[17px] border-b px-[24px]">
          <button className="flex items-center gap-x-1 capitalize px-[12px] lg:px-[18px] py-[8px]  transition-300 border hover:bg-[#26DE81] hover:text-white rounded-md text-[secondary] text-base font-semibold">
            close
          </button>
          <input
            type="submit"
            className="flex cursor-pointer items-center gap-x-4 bg-[#26DE81] hover:bg-[#0FB8B1]  text-white px-[18px] py-[10px] rounded-md text-xl"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileInformationInput;
