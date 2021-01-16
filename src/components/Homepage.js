import React from 'react'
import styled from 'styled-components'
import "../App.css"
import Card from './TableCard'

function Home(){
  return (
    <HomeStyle className="home">
      <h1>Select Playing 9</h1>
      <input className="search-input" type="text" placeholder="Search Players"/>
      <hr className="line"/>
      <div>
        <Card/>
      </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`

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


.search-input:focus{
  border:none;
}
`

export default Home
