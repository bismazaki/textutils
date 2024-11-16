import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Textform from './components/textform';
import Footer from './components/footer';
import Alert from './components/Alert';

function App() {
  const [mode , setmode] = useState('light'); //wheter darkmode or not

  const[alert, setAlert] = useState(null);

  const showalert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1E1941';
      showalert("Dark mode is Enable", "success");
      document.title = "TextUtils - Darkmode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is Enable", "success");
      document.title = "TextUtils - Lightmode";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about= "About Us" mode= {mode} togglemode ={togglemode} />

      <Alert alert= {alert}/>

      <Textform showalert= {showalert} heading="Enter Your Text" mode= {mode}/>
      
      <Footer ftitle= "All Rights Reserved @2024:" mode= {mode}/>
    </>
  );
}

export default App;
