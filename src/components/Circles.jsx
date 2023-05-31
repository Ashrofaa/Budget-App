import React from 'react';

export default function Circles({spent, budget}) {
  
  var r = document.querySelector(':root');

  if (!(isNaN(budget)) && budget != 0) {
    if (spent >= budget) {var newFill = 0;}
    else {
    var temp = (251*spent) / budget;
    var newFill = 251 - temp;}
  } else {var newFill = 251;}
  
  React.useEffect(() => {
    r.style.setProperty('--offset', newFill);
  }, [newFill]);

  return (
    <div className='circlesContainer'>
      <svg className='bgCircle circle'>
        <circle cx="50" cy="50" r="40" stroke="#e3aab4" strokeWidth="4" fill="none" />
      </svg>
      <svg className='movingCircle circle'>
        <circle cx="50" cy="50" r="40" stroke="#D14D72" strokeWidth="4" fill="none" />
      </svg>
      <span className='remNote'>{spent} EGP</span>
    </div>
  )
} 
