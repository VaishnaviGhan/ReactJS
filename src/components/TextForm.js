import React from 'react'

export default function TextForm(props) {
  return (
    <>
    <div>
    <div className="mb-3">
    <label for="myBox" class="form-label">{props.heading}</label>
    <textarea className="form-control" id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
    </>
  
  )
}
