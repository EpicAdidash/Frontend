import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container space-x-2" > 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="px-4"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="text-black bg-orange-500 hover:bg-orange-350 active:bg-orange-400 hover:text-white p-2 py-2 rounded-md text-sm font-medium" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="text-black bg-orange-500 hover:bg-orange-350 active:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="text-black bg-orange-500 hover:bg-orange-350 active:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="text-black bg-orange-500 hover:bg-orange-350 active:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="text-black bg-orange-500 hover:bg-orange-350 active:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" >
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}