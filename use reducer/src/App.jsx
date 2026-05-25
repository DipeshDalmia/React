import { useState,useReducer } from 'react'

const initialScore=[{
  id:1,
  name:'Dipesh',
  score:0
},
{
  id:2,
  name:'Kunal',
  score:0
}]
const reducer=(state,action)=>{
  switch(action.type){
    case "INCREASE":
      return state.map((player)=>{
        if(player.id===action.id){
          return {...player, score:player.score+1}
        }
        else{
          return player
        }
      })
      default:return state
  }
}

function App() {
  const [score,dispatch]=useReducer(reducer,initialScore)

  const handleIncrease=(player)=>{
    dispatch({type:"INCREASE",id:player.id})
  }

  return (
    <>
      {score.map((player)=>(
        <div key={player.id}>
          <input type="button" value={player.name} onClick={()=>handleIncrease(player)}/>
          {player.score}
        </div>
      ))}
    </>
  )
}

export default App
