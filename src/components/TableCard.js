import React from 'react'
import styled from 'styled-components'
function Card() {
  return (
    <TableStyle>
      <tr>
        <th>SELECT</th>
        <th><b>PLAYER NAME</b></th>
        <th>LEVEL</th>
        <th>AVATAR</th>
        <th><b>BET</b></th>
        <th><b>WINS</b></th>
        <th>LOST</th>
        <th><b>PRICE</b></th>
      </tr>
      <tr>
        <td><input type="checkbox"/></td>
        <td>Nisha Patahai</td>
        <td>2</td>
        <td>Image</td>
        <td>5</td>
        <td>20</td>
        <td>3</td>
        <td>500</td>
      </tr>
    </TableStyle>
  )
}

const TableStyle = styled.table`

tr{
  margin:5%;
}

`

export default Card
