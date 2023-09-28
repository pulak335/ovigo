import Image from "next/image";
import { useEffect, useState } from "react";

const SliderGallery = ({ place }) => {
  const { overview, overview_video } = place;

  const [selectedImage, setSelectedImage] = useState([overview[0]?.image]);
  const [videoShow, setVideoShow] = useState(false);

  useEffect(() => {
    // setVideoShow(false);

    const intervalId = setInterval(() => {
      const currentIndex = overview.indexOf(selectedImage);

      const nextIndex = (currentIndex + 1) % overview.length;

      setSelectedImage(overview[nextIndex]);
    }, 3000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImage, overview]);

  const handleVideoShow = () => {
    setVideoShow(true);
  };

  return (
    <div className="lg:pt-6 px-1">
      <div className="relative w-full h-[400px] md:h-[460px]">
        {videoShow === true ? (
          <>
            <video
              controls
              width="500"
              height="400"
              className="cursor-pointer rounded-xl"
            >
              {/* <source src={overview_video} type="video/mp4" /> */}
              <source src={overview_video} type="video/mp4" />
            </video>
          </>
        ) : (
          <>
            <Image
              src={selectedImage.image}
              alt=""
              fill
              className="rounded-xl"
            />
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-5 mt-2 mb-4">
        {overview?.map((image, index) => {
          return (
            <Image
              onClick={() => setSelectedImage(image)}
              src={image?.image}
              alt=""
              key={index}
              width={100}
              height={75}
              className="cursor-pointer rounded-xl"
            />
          );
        })}
        {/* <div className="min-h-[75px] w-full" onClick={() => handleVideoShow()}>
          <video
            controls
            width="100"
            height="75"
            className="cursor-pointer rounded-xl"
          >
           
            <source src={overview_video} type="video/webm" />
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default SliderGallery;
