import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  // text= "new Text"; // wrong way to change the state
  // setText("new Text"); // correct way to change the state

  const handleUpClick = () =>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!","success")
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!","success")
  }
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied text!","success")
  }

  const handleRemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra spaces!","success");
  }

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1 style={{color: props.mode==='light'?'black': 'white'}}>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='light'?'white':'rgb(84 84 84)',color:props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Covert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary m-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger m-2" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-2" style={{color: props.mode==='light'?'black': 'white'}}>
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{.008*(text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview here'}</p>
      </div>
    </>
  );
}

