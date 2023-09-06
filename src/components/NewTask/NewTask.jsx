import React, { useState } from "react";
import style from "./NewTask.module.css";
import ReactInputMask from "react-input-mask";
import Card1 from "../card1/Card1";
import Card2 from "../card2/Card2";

const NewTask = () => {
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCvc: "",
  });

  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCvc: "",
  });

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;

      if (name === "cardNumber" || name === "cardCvc") {
        if (!isNaN(value)) {
          setCardData((prevState) => ({
            ...prevState,
            [name]: Number(value),
          }));

          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
      } else {
        setCardData((prevState) => ({
          ...prevState,
          [name]: value,
        }));

        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }
  };

  const validateField = (name, value) => {
    let error = "";
    if (value.trim() === "") {
      error = "Поле обязательно для заполнения";
    } else if (name === "cardName") {
      if (!/^[a-zA-Z]+$/.test(value.trim()) || /\d/.test(value.trim())) {
        error = "Ошибка! Введите корректные данные";
      }
    } else if (name === "cardNumber") {
      if (isNaN(value) || value.length === 16) {
        error = "Номер карты должен содержать от 6 до 14 символов";
      }
    } else if (name === "cardCvc") {
      if (isNaN(value) || value.length !== 3) {
        error = "CVC должен состоять из 3 цифр";
      }
    } else if (name === "cardDate") {
      if (value.trim() === "") {
        error = "Введите корректные данные";
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const { cardName, cardNumber, cardDate, cardCvc } = cardData;
    let updatedErrors = {};

    if (cardName.trim() === "") {
      updatedErrors = {
        ...updatedErrors,
        cardName: "Поле обязательно для заполнения",
      };
    }

    if (cardNumber === "") {
      updatedErrors = {
        ...updatedErrors,
        cardNumber: "Поле обязательно для заполнения",
      };
    }

    if (cardDate.trim() === "") {
      updatedErrors = {
        ...updatedErrors,
        cardDate: "Поле обязательно для заполнения",
      };
    }

    if (cardCvc === "") {
      updatedErrors = {
        ...updatedErrors,
        cardCvc: "Поле обязательно для заполнения",
      };
    }

    setErrors(updatedErrors);

    if (Object.keys(updatedErrors).length === 0) {
      console.log("Confirmed");
    }
  };

  console.log(cardData);

  return (
    <div>
      <div className={style.cards}>
        <div
          style={{ border: "10px solid green" }}
          className={style.cards__assaid}
        >
          <Card1
            cardName={cardData.cardName}
            cardNumber={cardData.cardNumber}
            cardDate={cardData.cardDate}
          />
          <Card2 cardCvc={cardData.cardCvc} />
        </div>

        <div
          style={{ border: "10px solid yellow" }}
          className={style.cards__main}
        >
          <div>
            <ReactInputMask
              required
              mask="aaaaaaaaaaaaaaaaaa"
              maskChar=""
              value={cardData.cardName}
              name="cardName"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter card name"
            />
          </div>

          {errors.cardName && <p className={style.error}>{errors.cardName}</p>}

          <div>
            <ReactInputMask
              // required
              mask="99999999999999999"
              maskChar=""
              value={cardData.cardNumber}
              name="cardNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter card number"
            />
          </div>

          {errors.cardNumber && (
            <p className={style.error}>{errors.cardNumber}</p>
          )}
          <div className={style.cards__input}>
            <div>
              <ReactInputMask
                className={style.cards__input__left}
                required
                mask="99/99"
                maskChar=""
                value={cardData.cardDate}
                name="cardDate"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {errors.cardDate && (
              <p className={style.error}>{errors.cardDate}</p>
            )}

            <div>
              <ReactInputMask
                className={style.cards__input__right}
                required
                mask="999"
                maskChar=""
                value={cardData.cardCvc}
                name="cardCvc"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter CVC"
              />
            </div>

            {errors.cardCvc && <p className={style.error}>{errors.cardCvc}</p>}
          </div>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
