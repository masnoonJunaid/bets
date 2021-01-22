import React from 'react'
import styled from 'styled-components'
import "../App.css"

function SelectedCard(props){
  return (
      <ListStyle className="selected-list">
        <img className="side-avatar" alt="" src="kelly.jpeg"/>
        <div className="sec-1">
          <h3 className="player-name">{props.name}</h3>
          <div className="sec-2">
            <img className="icon" alt="" src="icons/trophy.svg"/>
            <p><b>20</b></p>
            <img className="icon" alt="" src="icons/bet.svg"/>
            <p><b>5</b></p>
          </div>
        </div>
        <div className="sec-3">
          <img className="icon"alt="" src="icons/price.svg"/>
          <p>500</p>
        </div>
      </ListStyle>
  )
}


const ListStyle = styled.li`
*{
  flex-wrap:wrap;
  display:flex;
}

.side-avatar{
  width:5vw;
  margin-left:5%;
  height:10vh;
  border-radius:16px;
}


.sec-1{
  display:block;
  width:100%;
  align-items:center;
  margin:4%;
}


.sec-2{
  display:flex;
  flex-wrap:nowrap;
  margin-bottom:2vh;
  width:100%;
  height:6vh;
  align-items:center;
  margin-left:3%;
}

.sec-3{
  display:flex;
  flex-wrap:nowrap;
  float:right;
  margin-right:2%;
  align-items:center;

}
.icon{
  width:25px;
  height:25px;
}
.player-name{
  text-align:center;
  height:1vh;
  display:flex;
  flex-wrap:nowrap;
  width:100%;
}

  `


export default SelectedCard
