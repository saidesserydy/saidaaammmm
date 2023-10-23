let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');

// btn.onclick = function(){
//     console.log(inp.value)
//  if(inp.value != ''){
//    boxs[0].innerHTML += `<p> ${inp.value}</p>`
//    inp.value = ''

//  }
// }

btn.addEventListener("click",()=>{
    if(inp.value != ''){
        boxs[0].innerHTML += `<p id="${inp.value}" draggable="true"ondragstart="drag(event)"> ${inp.value}</p>`
        inp.value = ''
     
      }
      
})
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


   



  








     
    
    