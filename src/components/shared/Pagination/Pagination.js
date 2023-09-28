const Pagination = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center">
        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a
          href="#"
          className="hidden w-6 h-6 leading-[24px] text-center mx-1 text-gray-900 transition-colors duration-300 transform  rounded-full sm:inline  hover:bg-[#5ed398] bg-[#6EE9AB] hover:text-white "
        >
          1
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-gray-900 transition-colors duration-300 transform bg-white rounded-md sm:inline  hover:bg-[#6EE9AB]  hover:text-white "
        >
          2
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-gray-900 transition-colors duration-300 transform bg-white rounded-md sm:inline  hover:bg-[#6EE9AB]  hover:text-white "
        >
          ...
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-gray-900 transition-colors duration-300 transform bg-white rounded-md sm:inline  hover:bg-[#6EE9AB]  hover:text-white "
        >
          9
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-gray-900 transition-colors duration-300 transform bg-white rounded-md sm:inline  hover:bg-[#6EE9AB]  hover:text-white "
        >
          10
        </a>

        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 mx-1 text-gray-900 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100  hover:bg-[#6EE9AB]  hover:text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
