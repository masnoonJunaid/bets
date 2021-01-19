import React from 'react'
import styled from 'styled-components'
import {BetConsumer} from '../context'
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
            return  value.users.map(bets => {
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
  text-align:left;
  padding:16px;
  width:100%;
}

`

export default Card
