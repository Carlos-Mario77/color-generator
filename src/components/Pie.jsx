import React from "react";
import "../scss/pie.scss";

function Pie({color}) {
  
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" id="made-by" href="https://github.com/Carlos-Mario77?tab=repositories" style={{ color: `white`, textDecoration: 'none'}}><p className="pie" style={{ color: `white`}}>Made by Carlos</p></a>
    </div>
  )
}

export default Pie