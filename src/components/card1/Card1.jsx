import React from "react";
import style from "./Card1.module.css";

function Card1({ cardName, cardDate, cardNumber }) {
  return (
    <div>
      <div className={style.card1}>
        <div className={style.card1__radios}>
          <input type="radio" />
          <div className={style.card1__radio}></div>
        </div>

        <div className={style.card1__top}>{cardName}</div>
        <div className={style.card1__bottom}>
          <div>{cardNumber}</div>
          <div>{cardDate}</div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
