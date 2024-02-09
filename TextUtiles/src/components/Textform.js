import React from 'react'
import { useState } from 'react'

let words;
export default function Textform(props) {
    const [text, setText] = useState("Enter the text");

    const clear = (event) => {
        setText("");
    };

    const LowerCase=()=>{
        const newText=text.toLowerCase();
        setText(newText);
    };

    const handelOnChange = (event) => {

        setText(event.target.value);

    };

    const UperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };
    if(text==='')
    {
        words=0;
    }
    else{
       words= text.split(' ').length;
    }
  
    return (
        <>
            <div className="container ">

                <h1>{props.heading}</h1>
                <div className='mb-4'>
                    <textarea className="form-control" rows="7" value={text} onChange={handelOnChange} onClick={clear}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={UperCase}>Convert to UperCase</button>
                <button className='btn btn-primary mx-2' onClick={LowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clear}>Clear the text </button>
            </div>

            <div className="container">
                <h2>Text Summary</h2>
                <p>{words} Words's {text.length} Character's</p>
            </div>
        </>
    )
}
