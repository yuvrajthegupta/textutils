import React, { useState } from "react";

function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked " + text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleClearClick=()=>{
        // console.log("On change")
        setText("")
    }
    const handleReverseClick=()=>{
        // console.log("On change")
        setText([...text].reverse().join(''))
    }
    const handleCopy=()=>{
      let copytext=document.getElementById("myBox")
      copytext.select()
      navigator.clipboard.writeText(copytext.value)
    }
    const handleExtraSpaces=()=>{
      setText(text.split(/[ ]+/).join(" "))
    }
  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Inverse Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
