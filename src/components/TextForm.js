import React,{useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!","Success")
    }
    const handlelowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower Case!","Success")
    }
    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Clear Text!","Success")
    }
    const handleSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Space handeled!","Success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#262829':'white' , color: props.mode==='dark'?'white':'black'}}id="myBox" rows="12"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowerClick}>Convert to lower case</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpace}>Handle Extra Space</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

