import { useState } from "react";
import style from "./NewTask.module.css";
import Card1 from "../card1/Card1";
import Card2 from "../card2/Card2";

const NewTask = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleInput3Change = (e) => {
    setInput3(e.target.value);
  };

  const handleInput4Change = (e) => {
    setInput4(e.target.value);
  };

  return (
    <div>
      <div className={style.cards}>
        <div className={style.cards__assaid}>
          <Card1 input1={input1} input2={input2} input3={input3} />
          <Card2 input4={input4} />
        </div>

        <div className={style.cards__main}>
          <input type="text" value={input1} onChange={handleInput1Change} />

          <input type="number" value={input2} onChange={handleInput2Change} />

          <div className={style.cards__input}>
            <input
              className={style.cards__input__left}
              type="date"
              value={input3}
              onChange={handleInput3Change}
            />
            <input
              className={style.cards__input__right}
              type="password"
              value={input4}
              onChange={handleInput4Change}
            />
          </div>

          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
