"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";

const ForgotPassword = () => {
  
  const [reSendPassword, setreSendPassword] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    fetch(
      "http://159.223.78.171:5000/usersLog/forgotPassword",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((forgotPassword) => {
        if (forgotPassword?.status === "Success") {
          localStorage.setItem(
            "ovigoForgotTokenEmail",
            forgotPassword?.ovigoForgotTokenEmail
          );
          toast(forgotPassword.status, {
            icon: "👏",
          });
          setreSendPassword(false);
          console.log(forgotPassword);
        } else {
          toast.error(forgotPassword.message);
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
            {reSendPassword ? (
              <div>
                <h3 className="text-3xl font-bold text-[#101828] lg:my-6 my-3">
                  Forgot Password?
                </h3>
                <p className="text-[#475467] text-base font-light">
                  Please enter your email address and we’ll{" "}
                </p>
                <p className="text-[#475467] text-base font-light">
                  send you a link to reset your password
                </p>
                <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 my-5">
                  <HiOutlineMail size="22px" color="#b6b9be" />
                  <input
                    type="email"
                    placeholder="Email"
                    required={true}
                    {...register("email", {
                      required: "email",
                    })}
                    className="w-full focus:outline-none rounded-md text-[#b6b9be]"
                  />
                </div>
                <input
                  className="btn w-full"
                  value="Send Email"
                  type="submit"
                />{" "}
              </div>
            ) : (
              <div>
                <h3 className="text-3xl font-bold text-[#101828] lg:my-6 my-3">
                  Check Your Email
                </h3>
                <p className="text-[#475467] text-base font-light">
                  We have sent you a link
                </p>
                <p className="text-[#475467] text-base font-light">
                  To reset password at link
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
