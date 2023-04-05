import React from 'react'

export default function Album() {
  return (
    <div style={{color:"purple"}}>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>BTS</td>
            <td>Map of the Soul: 7</td>
          </tr>
          <tr>
            <td scope='row'>Seventeen</td>
            <td>Attacca</td>
          </tr>
         
          <tr>
          <td scope='row'>G.O.D</td>
          <td>Chapter three</td>
        </tr>
        <tr>
        <td scope='row'>Exo</td>
        <td>Don't fight the feeling</td>
      </tr>
     

        </tbody>
      </table>
    </div>
  )
}