import Image from "next/image";

const VerifyComplete = () => {
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
          <div className="my-10">
            <h3 className="text-[#475467] text-4xl font-medium text-center">
              {" "}
              your verification is complete.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyComplete;
