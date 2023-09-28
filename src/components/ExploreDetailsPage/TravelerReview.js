import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReviewCard from "../Card/ReviewCard";

const TravelerReview = () => {
  const cardRef = useRef(null);

  const handlePrevButton = () => {
    const card = cardRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft = card.scrollLeft - width;
    }
  };

  const handleNextButton = () => {
    const card = cardRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft = card.scrollLeft + width;
    }
  };
  return (
    <div className="relative overflow-hidden px-30 lg:px-[50px]">
      <button
        className="h-full lg:pl-5    w-[60px] absolute left-0 flex items-center justify-center"
        onClick={handlePrevButton}
      >
        <p className="p-3 border bg-[#fff]  rounded-full shadow-xl duration-300 hover:shadow-none">
          <AiOutlineLeft className="text-2xl text-[#5F646F]" />
        </p>
      </button>
      <button
        className="h-full lg:px-10  w-[61px] absolute right-0 flex items-center justify-center"
        onClick={handleNextButton}
      >
        <p className="p-3 border rounded-full bg-[#fff]  shadow-xl duration-300 hover:shadow-none">
          <AiOutlineRight className="text-2xl text-[#5F646F]" />
        </p>
      </button>
      <div
        className="flex px-[38px] gap-6  scroll-smooth overflow-hidden"
        ref={cardRef}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default TravelerReview;
