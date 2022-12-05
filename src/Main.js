import React,{useState} from 'react'
import { Card,CardBody,Container} from 'reactstrap'
import Symbol from './Symbol'
import './style.css'
import ResetButton from './ResetButton'

//const ticTacToeArr = new Array(9).fill("Empty") //whenever array gets updated,your render called in some or other way.


function Main() {
  const [ticTacToeArr,setticTacToeArr] = useState(Array(9).fill("Empty"));
  const [isCircle , setisCircle] = useState(false);
  const [isWon , setIsWon ] = useState(false);
  const[gameOver , setGameOver] = useState(false);

 // const [isreset , setIsreset] = useState(f)
  
      function isWinner()
      {
        //condition start from 0
          if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[1] && ticTacToeArr[1] === ticTacToeArr[2]){
              setIsWon(true)
          }

          if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[1]){
            setIsWon(true)
        }
      
        if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[3] && ticTacToeArr[3] === ticTacToeArr[6]){
          setIsWon(true)
      }

          if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[3]){
            setIsWon(true)
        }

        if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[8]){
          setIsWon(true)
      }

      if(ticTacToeArr[0] !=="Empty"  && ticTacToeArr[0] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[4]){
        setIsWon(true)
    }


    //condition start from 1
        if(ticTacToeArr[1] !=="Empty"  && ticTacToeArr[1] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[7]){
          setIsWon(true)
      }

          if(ticTacToeArr[1] !=="Empty"  && ticTacToeArr[1] === ticTacToeArr[7] && ticTacToeArr[7] === ticTacToeArr[4]){
            setIsWon(true)
        }

        if(ticTacToeArr[1] !=="Empty"  && ticTacToeArr[1] === ticTacToeArr[0] && ticTacToeArr[0] === ticTacToeArr[2]){
          setIsWon(true)
      }

      if(ticTacToeArr[1] !=="Empty"  && ticTacToeArr[1] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[0]){
        setIsWon(true)
    }


    //condition start from 2
    if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[1] && ticTacToeArr[1] === ticTacToeArr[0]){
      setIsWon(true)
    }

          if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[0] && ticTacToeArr[0] === ticTacToeArr[1]){
            setIsWon(true)
        }

        if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[5] && ticTacToeArr[5] === ticTacToeArr[8]){
          setIsWon(true)
      }

      if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[5]){
        setIsWon(true)
    }

    if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[6]){
      setIsWon(true)
    }

      if(ticTacToeArr[2] !=="Empty"  && ticTacToeArr[2] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[4]){
        setIsWon(true)
    }


    //condition start from 3
    if(ticTacToeArr[3] !=="Empty"  && ticTacToeArr[3] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[5]){
      setIsWon(true)
  }

  if(ticTacToeArr[3] !=="Empty"  && ticTacToeArr[3] === ticTacToeArr[5] && ticTacToeArr[5] === ticTacToeArr[4]){
    setIsWon(true)
}

if(ticTacToeArr[3] !=="Empty"  && ticTacToeArr[3] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[0]){
  setIsWon(true)
}

  if(ticTacToeArr[3] !=="Empty"  && ticTacToeArr[3] === ticTacToeArr[0] && ticTacToeArr[0] === ticTacToeArr[6]){
    setIsWon(true)
}

  
    //condition start from 4
    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[1] && ticTacToeArr[1] === ticTacToeArr[7]){
          setIsWon(true)
      }

      if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[7] && ticTacToeArr[7] === ticTacToeArr[1]){
        setIsWon(true)
    }

    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[3] && ticTacToeArr[3] === ticTacToeArr[5]){
      setIsWon(true)
    }

      if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[5] && ticTacToeArr[5] === ticTacToeArr[3]){
        setIsWon(true)
    }

    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[2]){
      setIsWon(true)
    }

    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[6]){
    setIsWon(true)
    }

    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[0] && ticTacToeArr[0] === ticTacToeArr[8]){
    setIsWon(true)
    }

    if(ticTacToeArr[4] !=="Empty"  && ticTacToeArr[4] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[0]){
    setIsWon(true)
    }

    
    //condition start from 5
    if(ticTacToeArr[5] !=="Empty"  && ticTacToeArr[5] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[8]){
      setIsWon(true)
    }

    if(ticTacToeArr[5] !=="Empty"  && ticTacToeArr[5] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[2]){
    setIsWon(true)
    }

    if(ticTacToeArr[5] !=="Empty"  && ticTacToeArr[5] === ticTacToeArr[3] && ticTacToeArr[3] === ticTacToeArr[4]){
    setIsWon(true)
    }

    if(ticTacToeArr[5] !=="Empty"  && ticTacToeArr[5] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[3]){
    setIsWon(true)
    }

    //condition start from 6
    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[0] && ticTacToeArr[0] === ticTacToeArr[3]){
      setIsWon(true)
    }

    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[3] && ticTacToeArr[3] === ticTacToeArr[0]){
    setIsWon(true)
    }

    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[4]){
    setIsWon(true)
    }

    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[2]){
    setIsWon(true)
    }

    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[7] && ticTacToeArr[7] === ticTacToeArr[8]){
      setIsWon(true)
    }

    if(ticTacToeArr[6] !=="Empty"  && ticTacToeArr[6] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[7]){
    setIsWon(true)
    }

   //condition start from 7
   if(ticTacToeArr[7] !=="Empty"  && ticTacToeArr[7] === ticTacToeArr[1] && ticTacToeArr[1] === ticTacToeArr[4]){
    setIsWon(true)
    }

    if(ticTacToeArr[7] !=="Empty"  && ticTacToeArr[7] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[1]){
    setIsWon(true)
    }

    if(ticTacToeArr[7] !=="Empty"  && ticTacToeArr[7] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[8]){
      setIsWon(true)
    }

    if(ticTacToeArr[7] !=="Empty"  && ticTacToeArr[7] === ticTacToeArr[8] && ticTacToeArr[8] === ticTacToeArr[6]){
    setIsWon(true)
    }

    //condition start from 8
    if(ticTacToeArr[8] !=="Empty"  && ticTacToeArr[8] === ticTacToeArr[2] && ticTacToeArr[2] === ticTacToeArr[5]){
      setIsWon(true)
      }
  
      if(ticTacToeArr[8] !=="Empty"  && ticTacToeArr[8] === ticTacToeArr[5] && ticTacToeArr[5] === ticTacToeArr[2]){
      setIsWon(true)
      }
  
      if(ticTacToeArr[8] !=="Empty"  && ticTacToeArr[8] === ticTacToeArr[6] && ticTacToeArr[6] === ticTacToeArr[7]){
        setIsWon(true)
      }
  
      if(ticTacToeArr[8] !=="Empty"  && ticTacToeArr[8] === ticTacToeArr[7] && ticTacToeArr[7] === ticTacToeArr[6]){
      setIsWon(true)
      }

      }
      function playerInput(index){
        if(isWon)
        {
          setGameOver(true)
          return
        }
        if(ticTacToeArr[index] === "Empty"){
            ticTacToeArr[index] = isCircle ? 'circle' : 'cross'  
            setisCircle(!isCircle);  //render function
        }  
        else{
          alert('Inputting at wrong place')
        }
        isWinner();
      }

      const resetBoard = () => {
        setGameOver(false)
        setticTacToeArr(Array(9).fill("Empty"))
        setIsWon()
        
      } 

  return (
    <>
    <Container>
        <h2>
          {
            isWon ? <ResetButton resetBoard={resetBoard} />  : (isCircle ? 'circle trun' : 'cross trun')
          }
        </h2>
        <div className='grid-container'>
          {
            ticTacToeArr.map((val,index) => {
              return(
                  <>
                   <Card key={index}  className='box' onClick={ ()=> playerInput(index)}>
                    <CardBody className='temp'>
                      <Symbol player={val}/>
                    </CardBody>
                  </Card>

                  
                  </>
                 

              ) 
            })
          }
        </div>
    </Container>
    
    </>
  )
}

export default Main
