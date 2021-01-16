import React,{useState} from 'react'
import styled from "styled-components"
import "../App.css"
import{ BetConsumer} from "../context"

function Sidebar() {
  return (
    <ButtonStyle className="sidebar">
      <img className="main-dice" alt="dice" src="./icons/dice.svg"/>
      <button>START</button>
    </ButtonStyle>
  )
}


const ButtonStyle = styled.div`
.main-dice{
  witdh:160px;
  height:160px;
}
button{
  width:60%;
  height:8vh;
  background-color:#2510D7;
  border-radius:7px;
  margin-left:3%;
  color:ghostwhite;
  display:block;
  border:none;
  margin-top:60vh;
}

`

export default Sidebar
