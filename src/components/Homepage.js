import React from 'react'
import styled from 'styled-components'
import "../App.css"
import {BetConsumer} from '../context'
import Card from "./TableCard"

function Home(){
    return (
      <HomeStyle className="home">
        <header className="header">
          <h1>Select Playing 9</h1>
          <input className="search-input" type="text" placeholder="Search Players"/>
          <hr className="line"/>
        </header>
        <Card/>
        </HomeStyle>
    )
  }




const HomeStyle = styled.div`
*{
  width:75%;
}

h1{
  color:#2510D7;
  margin-left:10%;
  font-family:Roboto;
}

.search-input{
  margin-left:10%;
  height:5vh;
  border:none;
  text-align:center;
  width:40%;
}
.line{
  width:40%;
  margin-left:10%;
}
.header{
  background-color:ghostwhite;
  width:100%;
}

.search-input:focus{
  border: solid #FFFFFF;
}


`

export default Home
