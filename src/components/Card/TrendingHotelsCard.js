import Image from "next/image";
import Link from "next/link";
import profile from "../../assets/Group3.png";
import trendinglogo from "../../assets/g828.png";
import trendingImg from "../../assets/trending.jpg";

const TrendingHotelsCard = () => {
  return (
    <div
      className="w-full h-max mt-6 rounded-[15px]"
      style={{ border: "1px solid #105D36" }}
    >
      <div className="relative h-[230px]">
        <div className="w-full z-10">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "100%",
              height: "230px",
              borderRadius: "15px 15px 0px 0px",
              zIndex: "0",
            }}
            src={trendingImg}
            alt={trendingImg}
          />
        </div>
        <div
          className="bg-[#FFBF19] py-1 px-6 w-max absolute top-0 left-0"
          style={{ borderRadius: "15px 0px" }}
        >
          <h3 className="text-sm text-black m-0">Trending now</h3>
        </div>
        <div className="flex items-center justify-start gap-1 absolute left-0 bottom-0">
          <Image src={trendinglogo} alt={trendinglogo} width={38} height={38} />
          <Image src={profile} alt={profile} width={50} height={22} />
          <p className="text-[10px] text-white">
            100k+ Reviews By Happy Customers
          </p>
        </div>
      </div>
      <div className="py-3 px-3">
        <div>
          <h2 className="text-base text-black">Hotel Sonar Bangla</h2>
          <p className="text-sm text-[rgba(0, 0, 0, 0.81)]">
            Explore the majestic mountains and landscapes day and nights
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/" className="text-[#059DA4] text-[12px] font-semibold">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingHotelsCard;
