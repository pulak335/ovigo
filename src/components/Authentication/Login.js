"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiHide, BiLockAlt, BiShow } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const Login = () => {
  const [password, setPassword] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const handleLogin = (data) => {
    fetch("http://159.223.78.171:5000/usersLog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((loginData) => {
        if (loginData?.status === "Failled") {
          toast.error(loginData.message);
        } else {
          localStorage.setItem("ovigoLogInToken", loginData?.ovigoLogInToken);
          toast("Login Successfully", {
            icon: "👏 ",
          });
          router.push("/");
          window.location.reload();
        }
        console.log(loginData);
      })
      .catch((err) => console.log("error", err));
    console.log(data);
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
            <h3 className="text-3xl font-bold text-[#101828] lg:my-10 my-3">
              Sign In
            </h3>
            <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4">
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
                  />
                </div>
              ) : (
                <div className="absolute right-1 top-2">
                  <BiShow
                    onClick={() => setPassword(!password)}
                    size="22px"
                    color="#b6b9be"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-end my-5 text-[#0A7B76] font-medium text-base">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <input className="btn w-full" value="Continue" type="submit" />
            <div className="mt-5 flex items-center justify-center">
              <div className="border-b border-gray-400 w-full"></div>
              <div className="w-full text-center">or</div>
              <div className="border-b border-gray-400 w-full"></div>
            </div>
            <p className="w-full text-center text-sm text-[#676767]">
              Log In with
            </p>
            <div className="flex items-center justify-center gap-3 mt-3 border-b border-gray-500 pb-5">
              <button className="w-[150px] border border-gray-400 rounded-md py-2 flex items-center justify-center hover:bg-[#1877F2] smooth">
                <FcGoogle size="24px" />
              </button>
              <button className="w-[150px] border border-gray-400 rounded-md py-2 flex items-center justify-center text-[#1877F2] hover:text-white hover:bg-[#1877F2] smooth">
                <FaFacebook size="24px" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-1 text-base mt-3">
              <p> {"Don't"} have an Account?</p>{" "}
              <Link href="/register" className="text-[#0A7B76] font-medium">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
