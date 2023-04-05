import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"Dragon Fruit",price:"50",image:<div id="fru1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7ell03R4fO5rpIbxDj8iz4H23T0qDSVbgQ&usqp=CAU" alt=" "/></div>},
               {id:2,name:"Pine Apple",price:"40",image:<div id="Orange"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGeNoYZVPm5G4SyBcsWFQ2XZevg2tC49mcg&usqp=CAU" alt=" "/></div>},
               {id:3,name:"Grapes",price:"40",image:<div id="Grapes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcxUqNqDIm7X4JPecmzn26c8VfY6d5IGgEg&usqp=CAU" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} . FRUIT: {fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div>
    <h1 id="HEAD"><marquee> LIST OF THE Fruits </marquee></h1><br/>
        {dispmenu}
    </div>
  )
}