import React, { useState, useEffect } from "react";
import Quote from "./componentes/Quote";
import Spinner from "./componentes/Spinner";

const initialQuote = {
  text:'',
  author:'',
}


function App() {

  const [quote, setQuote] = useState(initialQuote);
  const [loiding, setLoiding] = useState(false)

  const upDateQuote = async() => {

    setLoiding(true)
    
    const url = 'https://www.breakingbadapi.com/api/quote/random'
    const res = await fetch(url);
    const [newQuote] = await res.json();
    
    const {quote: text, author} = newQuote
   
    setQuote({
      text,
      author
    })

    setLoiding(false);
  }

  useEffect(() => {

    upDateQuote();

  },[]);

  return (
   <div className="app">
     <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
      alt="logo"
     />
     <button onClick={() => upDateQuote()}>Get another</button>

     {
       loiding ? <Spinner/> :  <Quote quote={quote} />
     }
     
    
   </div>
  );
}

export default App;
