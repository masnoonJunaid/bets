import React from 'react'
import styled from 'styled-components'
import {BetConsumer} from '../context'
import escapeRegExp from 'escape-string-regexp'
function  Card (){
    return (
      <TableStyle>
        <tr className="table-head">
          <th>SELECT</th>
          <th>PLAYER NAME</th>
          <th>LEVEL</th>
          <th>AVATAR</th>
          <th>BET</th>
          <th>WINS</th>
          <th>LOST</th>
          <th>PRICE</th>
        </tr>
        <BetConsumer>
          {value =>  {
            let showPlayer;
            if(value.query){
              const match = new RegExp(escapeRegExp(value.query),'i')
              showPlayer = value.users.filter((user) =>match.test(user.Name))
            } else {
              showPlayer = value.users
            }

            return  showPlayer.map(bets => {
              return <tr key={bets.Name} bets={bets}>
                      <td><input type="checkbox"/></td>
                      <td>{bets.Name}</td>
                      <td>0</td>
                      <td><img className="avatar-img" alt="" src={bets["Profile Image"]}/></td>
                      <td>{bets.Bet}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>{bets.Price}</td>
                    </tr>
            })
          }}
        </BetConsumer>
      </TableStyle>
    )
}

const TableStyle = styled.table`
*{
  width:100%;
}
.avatar-img{
  width:22px;
  height:22px;
}

td,th{
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  padding:2%;
  width:100vw;
}

`

export default Card
