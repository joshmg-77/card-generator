import React, { useState, useEffect } from "react";
import "../Styles/foot.scss";
import { ArrayImages } from "../js/Arrayimages";

function Foot() {
  const [state, setState] = useState(0);
  let imgs = ArrayImages;

  useEffect(() => {
    document.querySelector<HTMLElement>("#card").style.backgroundImage = `url(${imgs[state]})`;
  });
  const Next = () => {
    setState(state + 1);
    document.querySelector<HTMLElement>("#card").style.backgroundImage = `url(${imgs[state]})`;
  };
  const Prev = () => setState(state - 1);
  return (
    <div>
      <div className="slide-container">
        <div className="slide">
          <img
            src={imgs[state].toString()}
            alt="card_bank"
            className="img-slide" />
        </div>
      </div>

      <button className="btn" onClick={Prev} disabled={state <= 0}>
             Prev
      </button>
      <button
        className="btn"
        onClick={Next}
        disabled={state === imgs.length - 1}
      >
            Next
      </button>
    </div>
  );
}
export default Foot;
