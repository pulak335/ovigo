import Image from "next/image";
import shop1 from "../../../assets/home/shop-1.png";
import shop2 from "../../../assets/home/shop-2.png";

const ShopCard = () => {
  return (
    <section className="container mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
        <div className="shop-card-1 flex gap-5 flex-col lg:flex-row-reverse items-center rounded-md">
          <div className="">
            {" "}
            <Image src={shop1} alt="shop image" />
          </div>
          <div className="basis-full lg:basis-3/4 pr-7">
            <p className="text-[30px] font-bold text-[#101828]">
              Purchase your necessary things on monsoon
            </p>
            <button className="bg-[#FEF0C7] border border-[#FDB022] hover:bg-[#FDB022] transition-color duration-300 rounded py-3 px-5 mt-10">
              Visit Shop
            </button>
          </div>
        </div>
        <div className="shop-card-2 flex gap-5 flex-col lg:flex-row-reverse items-center rounded-md">
          <Image src={shop2} alt="shop image" />
          <div className="basis-full lg:basis-3/4 lg:pr-7">
            <p className="text-[30px] font-bold text-[#101828]">
              Purchase your necessary things on monsoon
            </p>
            <button className="bg-[#FEF0C7] border border-[#FDB022] rounded py-3 px-5 mt-10 hover:bg-[#FDB022] transition-color duration-300">
              Visit Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCard;
