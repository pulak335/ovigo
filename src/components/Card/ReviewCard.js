import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import profile from "../../assets/home/profile.png";

const ReviewCard = () => {
  return (
    <div
      className="flex w-[369px] items-center justify-center flex-col  shadow-md rounded-md"
      style={{
        minWidth: "369px",
        height: "272px",
        border: "1px solid #E7E8EA",
      }}
    >
      <Image src={profile} alt={profile} width={70} height={70} />
      <h3 className="text-[#105D36] text-base font-bold">Ahmed H Khan</h3>
      <div className="flex items-center justify-center mb-3">
        <AiFillStar color="#FFBF19" size="20px" />
        <AiFillStar color="#FFBF19" size="20px" />
        <AiFillStar color="#FFBF19" size="20px" />
        <AiFillStar color="#FFBF19" size="20px" />
        <AiFillStar color="#FFBF19" size="20px" />
      </div>
      <p className="text-base font-medium text-[#101828] text-center">
        সুন্দরবন: বাংলাদেশের প্রাকৃতিক সৌন্দর্যের অদ্ভুত দৃশ্য
      </p>
    </div>
  );
};

export default ReviewCard;
