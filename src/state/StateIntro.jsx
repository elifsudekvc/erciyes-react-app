import React, { useState } from "react";

const StateIntro = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [numbers, setNumbers] = useState([]);
  const [color, setColor] = useState(null);
  const [numberArray, setNumberArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ])

  const change = () => {
    setWidth(width + 100);
    setHeight(height + 100);
  };

  const random = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (numbers.includes(randomNumber)) {
      return;
    } else {
      setNumbers([...numbers, randomNumber]);
    }
  };
  let RandomColor = [
    "red",
    "green",
    "blue",
    "black",
    "yellow",
    "orange",
    "brown",
    "purple",
  ];
  const changeColor = () => {
    const random = Math.floor(Math.random() * RandomColor.length);
    setColor(RandomColor[random]);
  };

  const changeNumber = () => {
    const index = Math.floor(Math.random() * 20)
        setNumberArray(numberArray.filter((item) => item !== numberArray[index]))
  };

  return (
    <>
      <button onClick={change}>Increase</button>
      <div
        style={{ width: width, height: height, backgroundColor: "black" }}
      ></div>
      <br />
      <button onClick={random}>add random</button>
      <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
      <button onClick={changeColor}>Change color</button>
      <div style={{ width: 200, height: 200, backgroundColor: color }}></div>
      <button onClick={changeNumber}>Remove Random</button>
      <ul>
          {numberArray.map((number) => (
            <li>{number}</li>
          ))}
      </ul>
    </>
  );
};

export default StateIntro;
