import React from 'react'
import Button from './Button'
import ButtonBox from './ButtonBox'
import Screen from './Screen'
import Wrapper from './Wrapper'
import { useState } from "react";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function calulator() {
  let [cal, setCal] = useState({
    sign: '',
    num: 0,
    res: 0,
  });
  
  const btnValues = [
    ['C','%','/'],
    [7,8,9,'X'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    [0,'.','='],
  ];

  const resetClickHandler = () => {
    setCal({
      ...cal,
      sign: '',
      num: 0,
      res: 0,
    });
  };

  const percentClickHandler = () => {
    let num = cal.num ? parseFloat(removeSpaces(cal.num)) : 0;
    let res = cal.res ? parseFloat(removeSpaces(cal.res)) : 0;

    setCal({
      ...cal,
      num: (num /= Math.pow(100,1)),
      res: (res /= Math.pow(100,1)),
      sign: '',
    });
  };

  const equalsClickHandler = () => {
    if (cal.sign && cal.num){
      const math = (a,b,sign) =>
      sign === '+'
        ? a + b
        : sign === '-'
        ? a - b
        : sign === 'X'
        ? a * b
        : a / b;

        setCal({
          ...cal,
          res:
            cal.num === "0" && cal.sign === "/"
              ? "Can't divide with 0"
              : toLocaleString(
                  math(
                    Number(removeSpaces(cal.res)),
                    Number(removeSpaces(cal.num)),
                    cal.sign
                  )
                ),
          sign: "",
          num: 0,
        });
    }
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCal({
      ...cal,
      sign: value,
      res: !cal.res && cal.num ? cal.num : cal.res,
      num: 0,
    });
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(cal.num).length < 16) {
      setCal({
        ...cal,
        num:
          cal.num === 0 && value === "0"
            ? "0"
            : removeSpaces(cal.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(cal.num + value)))
            : toLocaleString(cal.num + value),
        res: !cal.sign ? 0 : cal.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCal({
      ...cal,
      num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
    });
  };

  return (
    <Wrapper>
      <Screen className='text-xs' value={cal.num ? cal.num : cal.res} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) =>{
            return  (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={
                  btn === 'C'
                    ? resetClickHandler
                    : btn === '%'
                    ? percentClickHandler
                    : btn === '='
                    ? equalsClickHandler
                    : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                    ? signClickHandler
                    : btn === '.'
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            )
          })
        }
      </ButtonBox>
    </Wrapper>
  )
}

export default calulator