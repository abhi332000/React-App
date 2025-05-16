import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpCase = ()=> {
    // console.log("Upper text" +  text);
    let newText = text.toUpperCase();
    setText(newText)
  }
    const handleLowerCase = ()=> {
    // console.log("Upper text" +  text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('')
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white' : 'gray'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpCase}>Convert to upper case</button>
        <button className='btn btn-primary mx-3' onClick={handleLowerCase}>Convert to lower case</button>
        <button className='btn btn-primary mx-3' onClick={() => {setText('')}}>Clear text</button>
        <button className='btn btn-primary mx-3' onClick={() => {navigator.clipboard.writeText(text)}}>Copy text</button>
        <button className='btn btn-primary mx-3' onClick={() => {alert("Text copied to clipboard")}}>Alert</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text :"Enter the text to preview anything"}</p>
    </div>
    </>
  )
}