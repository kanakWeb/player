/* fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
.then(Response=>Response.json())
.then(data=>console.log(data)) */

const allPlayers=()=>{
    document.getElementById('player-info').innerText=' '
    document.getElementById('sppiner').style.display='block'
    
    const searchField=document.getElementById('search-field').value;
    const errorShow=document.getElementById('error-handle').innerHTML=``
    if(searchField==''){
        const errorShow=document.getElementById('error-handle')
        const div=document.createElement('div')
        div.innerHTML=`<h6 class="text-danger mt-auto">Not found please enter right information!</h6>`
        errorShow.appendChild(div)
        document.getElementById('sppiner').style.display='block'
    }
    
   else{
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchField}`
    
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>playersDetails(data.player))
    
    document.getElementById('sppiner').style.display='none'
    }
   }




const playersDetails=(playersof)=>{
    // console.log(players)
   
    
    if(playersof){
        for(const player of playersof){
    
        const parent=document.getElementById('player-info')
        const div=document.createElement('div')
        div.innerHTML=` <div class="card px-1 py-4 border my-2 text-center">
        <div class="photo">
            <img width="100px" src="${player.strThumb}" alt="image">
        </div>
        <h4>name: ${player.strPlayer}</h4>
        <h6>Country:${player.strNationality}</h6>
        <div class="allbutton">
            <button onclick=Delete() type="button" class="btn btn-dark">Delete</button>
            <button onclick="Details('${player.idPlayer}')" type="button" class="btn btn-info">Details</button>
        </div>`
        parent.appendChild(div)
      
        }
    
    }
    else{
        {
            const errorShow=document.getElementById('error-handle')
            const div=document.createElement('div')
            div.innerHTML=`<h6 class="text-danger mt-auto">Not found please enter right information!</h6>`
            errorShow.appendChild(div)
            document.getElementById('sppiner').style.display='block'
        }
    }
   //console.log(players)
}

const Details=(id)=>{
    document.getElementById('deails-div').innerText=' '
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id} `;
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>playerDetailsId(data.players[0]))
}

const playerDetailsId=(playerId)=>{
   // console.log(playerId.idPlayer)


if(playerId.strGender=='Male'){
    document.getElementById('male').style.display='block'
    document.getElementById('female').style.display='none'
}
else{
    document.getElementById('female').style.display='block'
    document.getElementById('male').style.display='none'
}

 const deailsDiv=document.getElementById('deails-div')
   const div=document.createElement('div')

   div.innerHTML=`<div class="card px-1 py-4 border my-2 text-center">
   <h3>Team ID:${playerId.idTeam} </h3>
   <h5>Team:${playerId.strTeam}</h5>
   <h6>Gender:${playerId.strGender}</h6>
   </div>`
   deailsDiv.appendChild(div)

}

const Delete=()=>{
    const detailsDelete=document.getElementById('deails-div')
    detailsDelete.innerHTML=``
 }

