import { FaArrowUp } from "react-icons/fa";
import styles from "./scrollToTop.module.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`scroll-to-top-button ${isVisible ? "block" : "hidden"}`}>
      <span className={styles.scrollToTopButton} onClick={scrollToTop}>
        <FaArrowUp />
      </span>
    </div>
  );
};

export default ScrollToTop;
