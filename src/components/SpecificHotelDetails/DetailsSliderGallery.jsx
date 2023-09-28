import Image from "next/image";
import { useEffect, useState } from "react";

const DetailsSliderGallery = ({ singleHotel }) => {
  console.log("dera", singleHotel);

  const { room_another_image } = singleHotel;
  console.log(room_another_image);

  const [selectedImage, setSelectedImage] = useState([
    room_another_image[0]?.another_image,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = room_another_image.indexOf(selectedImage);

      const nextIndex = (currentIndex + 1) % room_another_image.length;

      setSelectedImage(room_another_image[nextIndex]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImage, room_another_image]);

  return (
    <div className="lg:pt-6 px-1">
      <div className="relative w-full h-[400px] md:h-[460px]">
        <Image
          src={selectedImage?.another_image}
          alt=""
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-wrap gap-5 mt-2 mb-4">
        {room_another_image?.map((image, index) => {
          return (
            <Image
              onClick={() => setSelectedImage(image)}
              src={image?.another_image}
              alt=""
              key={index}
              width={100}
              height={75}
              className="cursor-pointer rounded-xl"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailsSliderGallery;
