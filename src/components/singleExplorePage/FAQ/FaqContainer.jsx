import { useState } from "react";
import FAQ from "./FAQ";

const FaqContainer = () => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      console.log(index);

      return setOpen(null);
    }
    setOpen(index);
  };
  const faqData = [
    {
      title: "Where is Sundarbans located?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title:
        "What are the essential things to carry while visiting Sundarbans?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title: "What makes Sundarbans unique in terms of its biodiversity?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title: "What types of wildlife can be seen in Sundarbans?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title: "When is the best time to visit Sundarbans?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title: "What types of tour packages are available for Sundarbans?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
    {
      title: "Is it necessary to have a guide for Sundarbans exploration?",
      desc: "Sundarbans is a vast mangrove forest located in the delta region of Bay of Bengal, shared by India and Bangladesh.It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
    },
  ];
  return (
    <div className="bg-[#f2f4f7] pt-[50px] pb-[70px]">
      <div className="container ">
        <h2 className="text-[36px] text-black font-medium pb-3">{"(FAQ)"}</h2>
        <div className="w-full lg:w-[400px] border-b border-2"></div>
        <div className="w-full lg:w-[800px] mt-10">
          {faqData.map((data, index) => (
            <FAQ
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
