import React, {useState} from 'react'


function Textform( {heading , mode , showalert}) {
     const HandleLCclick =()=> {
        // console.log("Change to UpperCase");
        let newtext = Text.toLowerCase();
        setText(newtext);
        showalert("Converted to Lowercase" , "success");
    }
    const Handleupclick =()=> {
        // console.log("Change to UpperCase");
        let newtext = Text.toUpperCase();
        setText(newtext);
        showalert("Converted to Uppercase" , "success");
    }
    const HandleCopyText =()=> {
        navigator.clipboard.writeText(Text);
        showalert("Copy Text" , "success");
    }
    const HandleClearText =()=> {
        let newtext = '';
        setText(newtext);
        showalert("Clear Text" , "success");
    }
    const handleOnchange =(event)=> {
        // console.log("On Changed");
        setText(event.target.value);
    }
    const [Text, setText] = useState('');

    return (
        <>
        <div className='main-content'>
        <div className='container my-5' style={{color: mode=== 'dark'?'white':'black'}}>
            <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  value={Text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled ={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={Handleupclick}>Convert To UpperCase</button>
                <button disabled ={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={HandleLCclick}>Convert To LowerCase</button>
                <button disabled ={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={HandleCopyText}>Copy Text</button>
                <button disabled ={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={HandleClearText}>Clear Text</button>
            </div>
            <div className='container' style={{color: mode=== 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {Text.length} Characters</p>
                <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>

                <h3>Preview</h3>
                <p>{Text.length>0?Text:"Nothing to preview"}</p>
            </div>
        </div>
           
        </>
    );
}
export default Textform;