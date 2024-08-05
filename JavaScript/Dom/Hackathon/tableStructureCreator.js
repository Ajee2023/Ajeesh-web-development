


function getTH(){
   
    const column = Object.keys(Data[0]);
    const head = document.querySelector('thead');
   
    let tag = "<tr>";
    for( i= 0; i < column.length; i++){
    tag  +=  `<th>${column[i]}</th>`; 
    
   }
   tag += "</tr>";
   head.innerHTML = tag;
  
   getTD();
}
function getTD(){
    const body = document.querySelector('tbody');
    let tags = "";
    Data.map(d => {
        tags += `<tr>
             <td>${d}</td>
             <td>${d}</td>   
            <td>${d}</td>
            </tr>`
            
    })
    body.innerHTML = tags;
}
getTH();
