import { useState } from 'react';

export function ChangeBg() {
  const [currentBg, setBg] = useState("image");
  let mainBody = document.querySelector(".page-content");
  
  function switchBg() {
    if(currentBg === "image") {
      mainBody.classList.remove("home-pg-bg");
      mainBody.classList.add("alt-bg");
      setBg("grey");
    } else {
      mainBody.classList.remove("alt-bg");
      mainBody.classList.add("home-pg-bg");
      setBg("image");
    }
  };

  return (
    <>
    <h1 className="bg-display">Change Background</h1>
    {currentBg === "image" && (
      <button type="button" className="button-bg-chg" onClick={switchBg}>Grey</button>
    )}
    {currentBg === "grey" && (
      <button type="button" className="button-bg-chg" onClick={switchBg}>Image</button>
    )}
    
    </>
  );
};