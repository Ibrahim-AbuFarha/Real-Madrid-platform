import React from "react";
import real from "./images/real.jpg";
import sentiago from "./images/sentiago.jpg";
import uEFA from "./images/uefa.jpg";
import bgReal from "./images/bgReal.jpg";
import { useState, useEffect } from "react";
import "./Carousel.css";
function Carousel() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className="body">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src={bgReal} alt="" />
          </div>
          <div className="slide">
            <img src={sentiago} alt="" />
          </div>
          <div className="slide">
            <img src={uEFA} alt="" />
          </div>
          <div className="slide">
            <img src={real} alt="" />
          </div>
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation-manual ">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
