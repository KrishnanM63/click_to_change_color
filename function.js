const button=document.querySelector("#btn")
const col=document.querySelector("#color")
const body=document.querySelector("#total")

let coarry=["red","green","blue","yellow"]

button.addEventListener("click",(event)=>{
    const randomss= Math.floor(Math.random()*coarry.length)
    const chosen = coarry[randomss];
    body.style.backgroundColor=coarry[randomss]
     col.textContent=chosen
})