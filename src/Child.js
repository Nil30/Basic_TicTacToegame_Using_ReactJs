import React,{useState} from 'react'
import { FaBeer,FaGit } from 'react-icons/fa';

function Child() {
    let [count,setCount] = useState(0);
    console.log(count)
  return (
   <>
     
         <h2>useState Function</h2>
        <div> {count}   </div>

        <button onClick={ () => {
            setCount(count+1);
        }}> Incress </button>

        <button onClick={ () =>{
            count = count + 1
        }}> Incress without set count</button>
     

        <div className='conatainter'>
        <h3> Lets go for a <FaBeer />? </h3>
        <h2> <FaGit/></h2>
        </div>

   </>

)
}

export default Child
