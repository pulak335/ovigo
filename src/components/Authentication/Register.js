"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiHide, BiLockAlt, BiShow } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [findMail, setFindMail] = useState(null)

  // const router = useRouter();
  const router = useRouter();

  const [password, setPassword] = useState(true);
  const handleRegister = (data) => {
    console.log(data);
    fetch("http://159.223.78.171:5000/usersReg", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((registerData) => {
        // console.log(registerData);
        //  setFindMail(registerData?.data?.email)
        //  console.log(findMail)
        if (registerData?.status === "Successfully") {
          toast(registerData.status, {
            icon: "👏",
          });
          // console.log(findMail)
          router.push(`/verify-otp/?email=${registerData?.data?.email}`);
        } else {
          toast.error(registerData.message);
        }
      })
      .catch((errors) => {
        console.log(errors);
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <h3 className="text-base text-[#101828] lg:mt-9 mt-3 mb-7">
              <strong>Create an account</strong> to easily use ovigo.net
              services.
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
            <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4">
              <BsTelephone size="22px" color="#b6b9be" />
              <input
                type="number"
                placeholder="Phone no"
                required={true}
                {...register("phone", {
                  required: "phone",
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
            <div className="flex justify-start gap-2 items-center mt-4">
              <input
                required={true}
                {...register("checkbox", {
                  required: "checkbox",
                })}
                type="checkbox"
                className="checkbox-sm bg-transparent "
              />
              <p className="m-0 text-[#344054] text-base">
                By creating an account you agree to our Terms & Conditions
              </p>
            </div>
            <input className="btn w-full mt-5" value="Continue" type="submit" />
            <div className="flex items-center justify-center gap-1 text-base pt-3 border-t border-gray-400 mt-5">
              <p> Already have an Account? </p>{" "}
              <Link href="/login" className="text-[#0A7B76] font-medium">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
