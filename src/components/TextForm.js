import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    }

    const handleOnChange = (event)=>{
      setText(event.target.value);
      console.log('dwq')
    }
    const[text,setText] = useState("Enter text here")
  return (
    <>
    <div>
    <div className="mb-3">
    <label for="myBox" class="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleupClick}>Convert to UpperCase</button>
    </div>
    </>
  
  )
}
