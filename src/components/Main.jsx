import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/css/Main.scss";
const Main = (props) => {
  const [docs, setDocs] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <div className="Main_car">
        <Carousel data-bs-theme="dark" className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\img\Sample-PNG-Image.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\img\Sample-PNG-Image.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\img\Sample-PNG-Image.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
