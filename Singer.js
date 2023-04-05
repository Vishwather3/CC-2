import React from 'react'

export default function Singer() {
  return (
    <div style={{color:"red"}}>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>BTS</td>
            <td>2020</td>
          </tr>
          <tr>
            <td scope='row'>Taylor Swift</td>
            <td>2021</td>
          </tr>
          <tr>
            <td scope='row'>NCT Dream</td>
            <td>2022</td>
          </tr>
          <tr>
          <td scope='row'>G.O.D</td>
          <td>2003</td>
        </tr>
        <tr>
        <td scope='row'>Exo</td>
        <td>2022</td>
      </tr>

        </tbody>
      </table>
    </div>
  )
}