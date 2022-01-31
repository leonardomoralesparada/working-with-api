import React from "react";


const Quoete = ({quote}) => {
    return(
        <p>
             {quote.text} <br/>
             <span> - {quote.author} </span>
         </p>
    )
}

export default Quoete;