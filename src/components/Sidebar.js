import React,{useState} from 'react'
import styled from "styled-components"
import "../App.css"
import{ BetConsumer} from "../context"

import SelectedCard from "./SelectedCard"

function Sidebar() {
  return (
    <ButtonStyle className="sidebar">
      <img className="main-dice" alt="dice" src="./icons/dice.svg"/>
      <hr className="h-line"/>
      <div className="sidebar-list">
        <SelectedCard name={"Disha Pathani"}/>
        <SelectedCard name={"Kelly"}/>
        <SelectedCard name={"Sweety Pi"}/>
        <SelectedCard name={"Georgina"}/>
        <SelectedCard name={"Mr Hunk"}/>
        <SelectedCard name={"Stephanie"}/>
        <SelectedCard name={"Richie Rick"}/>
        <SelectedCard name={"Disha Pathani"}/>
        <SelectedCard name={"Disha Pathani"}/>
      </div>
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
  border:none;
  display:block;
}

.h-line{
  width:90%;
  color:#2510D7;
}

`

export default Sidebar
