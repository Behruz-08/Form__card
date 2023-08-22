import React from "react";
import style from "./Card1.module.css";

function Card1({ input1, input2, input3 }) {
  return (
    <div>
      <div className={style.card1}>
        <div className={style.card1__radios}>
          <input type="radio" />
          <div className={style.card1__radio}></div>
        </div>

        <div className={style.card1__top}>{input1}</div>
        <div className={style.card1__bottom}>
          <div>{input2}</div>
          <div>{input3}</div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
