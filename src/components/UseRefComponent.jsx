import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  //!useRef 2nci kullanımı bir obje oluştrmak burada valueREf adında bir obje oluştorduk {current:0} gibi hafıZada yeri DEĞİŞMEZ
   const valueRef = useRef(0);
  console.log(valueRef);
//! useREf 1nci kullanımı dom elementleri yakaladık 
  const inputRef = useRef(null);
  //console.log(inputRef);
  //console.log(inputRef.current);
  const divRef = useRef(null);

  const changeBGColor = () => {
    //divRef.current.style.backgroundColor = "orange";
    const colors = [
      "orange",
      "pink",
      "purple",
      "red",
      "#00ff00",
      "rgb(150,150,150)",
    ];
    const random = Math.trunc(Math.random() * colors.length);
    //console.log(random);
   //divRef.current.style.backgroundColor = colors[random];

    //console.log(inputRef.current.value);
    // divRef.current.style.backgroundColor = inputRef.current.value;
  };

  useEffect(() => {
    document.querySelector("input").focus();
    inputRef.current.focus();
  //inputRef.current.parentNode.style.backgroundColor="red"
  }, []);

  const increase = () => {
    setValue(value + 1);
    valueRef.current+=1
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      {/*  autoFocus ile sayfa  ilk render olunca focuslanabilr ama bu örnekte javascript ile yapıldı */}
      <input ref={inputRef} placeholder="Enter text..." />
       {/* <input type="color" ref={inputRef} placeholder="Enter text..." /> */}
      <button onClick={changeBGColor}>changeBGColor</button>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default UseRefComponent;
