import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
    let newtext = text.toUpperCase();
    props.ShowAlert("Converted to uppercase","success");
    setText(newtext)
    }
    const handleClearClick = ()=>{
        let newtext = '';
        setText(newtext)
        }

    // const handleredClick = ()=>{
    //     let newtext = document.getElementById('myBox')
    //     newtext.style.backgroundColor = 'red';
    //     }
    const [mage,SetMage] = useState({
        color : 'black',
        backgroundColor:'red'
    })
    const [btn,Setbtn] = useState('Red Background')

    const mood = () => {
      let newtext = document.getElementById('myBox');
      if (mage.color === 'black') {
          newtext.style.backgroundColor = 'red';
          newtext.style.color = 'white';
          SetMage({backgroundColor: 'red', color: 'white' });
          Setbtn('White Background');
      } else {
          newtext.style.color = 'black';
          newtext.style.backgroundColor = 'white';
          SetMage({backgroundColor: 'white', color: 'black' });
          Setbtn('Red Background');
      }
  }

    const handleOnChange = (event)=>{
      setText(event.target.value);
      console.log('dwq')
    }
    const[text,setText] = useState("")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#203b7a'}}>
    <div className="mb-3">
      <h1>My name is Ghan</h1>
    <label for="myBox" class="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#203b7a'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={mood}>{btn}</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'#203b7a'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}words and {text.length} charachter</p>
        <p>{0.5 * text.split(" ").length} Time required</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in text box to preview here"}</p>
    </div>
    </>
  
  )
}
