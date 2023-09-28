"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyOtp = ({ email }) => {
  console.log(email);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const handleLogin = (data) => {
    const otp = Object.values(data).join("");
    const bodydata = { otp, email };
    console.log(data);
    fetch("http://159.223.78.171:5000/usersReg/verifyOTP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodydata),
    })
      .then((response) => response.json())
      .then((verifyData) => {
        if (verifyData?.status == "Successfully") {
          toast("Your Verify Successfully", {
            icon: "👏",
          });
          router.push("/login");
        } else {
          toast.error(verifyData.message);
        }
      });
  };

  const handleResendOtp = (email) => {
    console.log("email", email);
    // const resentData = { email };
    fetch("http://159.223.78.171:5000/usersReg/resendOTP", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((verifyData) => {
        console.log(verifyData);

        if (verifyData?.data.modifiedCount > 0) {
          toast.success(verifyData.message, {
            icon: "👏",
          });
        } else {
          toast.error("Something wrong");
        }
      });
  };

  return (
    <div className="container">
      <div className="flex items-center justify-center pt-7 pb-20">
        <div className="w-[570px] bg-[#FCFCFD] rounded-lg py-6 px-10 shadow-md">
          <div className="w-[127px] h-[43px] m-auto">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src="https://ik.imagekit.io/6rwnvzspf/ovigo/logo.svg"
              alt="https://ik.imagekit.io/6rwnvzspf/ovigo/logo.svg"
            />
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex items-center justify-between my-9">
              <h3 className="text-3xl text-[#101828] font-medium m-0">
                Verify
              </h3>
              <Link
                href="/"
                className="text-[#0A7B76] font-medium text-base m-0"
              >
                Skip
              </Link>
            </div>
            <p className="text-[#101828]">
              Check your email. We have sent you a verification code.
            </p>
            <div className="flex gap-5 mt-10 mb-3">
              <input
                type="number"
                required={true}
                {...register("verify", {
                  required: "verify",
                })}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
              />
              <input
                type="number"
                required={true}
                {...register("verify1", {
                  required: "verify1",
                })}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
              />
              <input
                type="number"
                required={true}
                {...register("verify2", {
                  required: "verify2",
                })}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
              />
              <input
                type="number"
                required={true}
                {...register("verify3", {
                  required: "verify3",
                })}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl "
              />
            </div>
            <input
              className="btn w-full mt-3"
              value="Verify account"
              type="submit"
            />
            <div className="mt-10 flex items-center justify-center gap-2">
              <p className="text-[#475467] text-base m-0 text-center">
                Expires in: 03:43. {"Didn't"} receive the code ?{" "}
              </p>
              <p
                className="text-[#0A7B76] font-medium cursor-pointer"
                onClick={() => handleResendOtp(email)}
              >
                Resend
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
