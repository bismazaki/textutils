import React from 'react'

function Footer({ ftitle, mode }){
    return(
<>
<footer>
<div className={`text-center p-2 bg-${mode}`}>
    <p className='my-1' style={{color: mode=== 'dark'?'white':'black'}}>{ftitle}</p>
  </div>
</footer>
</>
    );
}

export default Footer;