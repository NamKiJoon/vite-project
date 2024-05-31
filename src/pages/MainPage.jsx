import React, { useRef, useState, useEffect } from "react";
import Dots from "./Dots";
import "../App.css";

import Main from "../components/Main";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";
import Main4 from "../components/Main4";
import Footer from "../components/Footer";

const MainPage = (props) => {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (
          scrollTop >= pageHeight + DIVIDER_HEIGHT &&
          scrollTop < pageHeight * 2
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        } else if (
          scrollTop >= pageHeight * 2 + DIVIDER_HEIGHT * 2 &&
          scrollTop < pageHeight * 3
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(4);
        } else if (
          scrollTop >= pageHeight * 3 + DIVIDER_HEIGHT * 3 &&
          scrollTop < pageHeight * 3.2
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3.3 + DIVIDER_HEIGHT * 3.3,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(5);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= pageHeight * 3.2 + DIVIDER_HEIGHT * 3.2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(4);
        } else if (
          scrollTop >= pageHeight * 3 + DIVIDER_HEIGHT * 3 &&
          scrollTop < pageHeight * 4
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        } else if (
          scrollTop >= pageHeight * 2 + DIVIDER_HEIGHT * 2 &&
          scrollTop < pageHeight * 3
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (
          scrollTop >= pageHeight + DIVIDER_HEIGHT &&
          scrollTop < pageHeight * 2
        ) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <Dots currentPage={currentPage} />
      <div className="inner">
        <Main />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Main2 />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Main3 />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Main4 />
      </div>
      <div className="inner">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
