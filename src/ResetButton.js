import React from 'react'

function ResetButton({resetBoard}) {
  return (
    <>
        
        <button onClick={resetBoard}>Reset</button>
        <p>Winner winner</p>
    </>
  )
} 

export default ResetButton
