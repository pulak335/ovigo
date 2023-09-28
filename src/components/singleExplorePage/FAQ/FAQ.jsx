import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const FAQ = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[15px] px-4 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[18px] font-bold text-black">{title}</p>
        <div className="text-[18px]">
          {open ? <MdOutlineClose /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-[24px] pt-4  pb-7 text-[#3C3C43]">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default FAQ;
