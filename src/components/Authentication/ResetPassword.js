"use client";
// next import
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// react import
import { useState } from "react";
import { useForm } from "react-hook-form";
// project import
import toast from "react-hot-toast";
// icon import form from "react-icon"
import { BiHide, BiLockAlt, BiShow } from "react-icons/bi";

const ResetPassword = () => {
  const router = useRouter();
  const [isResetPassword, setIsResetPassword] = useState(true);
  const [password, setPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    if (data?.confirm_password == data.password) {
      const email = localStorage.getItem("ovigoForgotTokenEmail");
      const password = data?.password;
      const resetData = { email, password };
      fetch("http://159.223.78.171:5000/usersLog/newPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resetData),
      })
        .then((response) => response.json())
        .then((resetPass) => {
          if (resetPass?.status == "Success") {
            toast(resetPass.message, {
              icon: "👏",
            });
            setIsResetPassword(false);
            router.push("/login");
          }
        });
    } else {
      toast.error("password not match");
    }

    // setIsResetPassword(false);
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
            {isResetPassword ? (
              <div>
                {" "}
                <h3 className="text-3xl font-bold text-[#101828] lg:my-6 my-3">
                  New Password
                </h3>
                <p className="text-[#475467] text-base font-light">
                  Get a new password for your account.
                </p>
                <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4 relative">
                  <BiLockAlt size="22px" color="#b6b9be" />
                  <input
                    type={password ? "password" : "text"}
                    required={true}
                    placeholder="Password"
                    {...register("password", {
                      required: "password",
                    })}
                    className="w-full focus:outline-none rounded-md text-[#b6b9be] "
                  />
                  {password ? (
                    <div className="absolute right-1 top-2">
                      <BiHide
                        onClick={() => setPassword(!password)}
                        size="22px"
                        color="#b6b9be"
                        className="cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="absolute right-1 top-2">
                      <BiShow
                        onClick={() => setPassword(!password)}
                        size="22px"
                        color="#b6b9be"
                        className="cursor-pointer"
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4 relative">
                  <BiLockAlt size="22px" color="#b6b9be" />
                  <input
                    type={password ? "password" : "text"}
                    required={true}
                    placeholder="Confirm Password"
                    {...register("confirm_password", {
                      required: "confirm_password",
                    })}
                    className="w-full focus:outline-none rounded-md text-[#b6b9be] "
                  />
                  {newPassword ? (
                    <div className="absolute right-1 top-2">
                      <BiHide
                        onClick={() => setNewPassword(!newPassword)}
                        size="22px"
                        color="#b6b9be"
                        className="cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="absolute right-1 top-2">
                      <BiShow
                        onClick={() => setNewPassword(!newPassword)}
                        size="22px"
                        color="#b6b9be"
                        className="cursor-pointer"
                      />
                    </div>
                  )}
                </div>
                <input
                  className="btn w-full mt-5"
                  value="Change Password"
                  type="submit"
                />
              </div>
            ) : (
              <div>
                <h3 className="text-3xl font-bold text-[#101828] lg:my-6 my-3">
                  Congratulations
                </h3>
                <div className="mb-5">
                  <p className="text-[#475467] text-base font-light">
                    your password problem is set.
                  </p>
                  <p className="text-[#475467] text-base font-light">
                    sign to continue using your account.
                  </p>
                </div>
                <button className="btn w-full mt-5">
                  <Link href="/login">Sign In</Link>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
