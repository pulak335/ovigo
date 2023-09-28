import Image from "next/image";
import Link from "next/link";

const ExploreCard = ({ explore }) => {
  return (
    <Link href={`/explore/${explore._id}`} className="">
      <div className="w-[290px] h-auto relative cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
        <Image
          src={explore?.image}
          alt=""
          width={290}
          height={320}
          className="rounded-xl object-cover "
        />
        <div
          className="absolute bottom-0 left-0  w-full text-center py-3 rounded-xl "
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <p className="text-base mb-1 text-[#FBFBFB]">
            {explore?.sub_district}
          </p>
          <h2 className="text-lg font-medium text-[#fff]">
            {explore?.place_name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;
