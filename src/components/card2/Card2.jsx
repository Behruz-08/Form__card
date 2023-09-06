import React from "react";
import style from "./Card2.module.css";
function Card2({ cardCvc }) {
  return (
    <div>
      <div className={style.card2}>
        <input type="text" />

        <div className={style.card2__top}>{cardCvc}</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quisquam, doloremque! Eius <br /> quas voluptatum
            repellat? Ipsa autem nemo eum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
