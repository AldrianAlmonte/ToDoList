let toDoList = [];

function add(){
    let task = document.getElementById("to-do").value;
    toDoList.push(task);
    console.log(task);
    showTask();
}
function showTask(){
    let ullist = document.getElementById("to-do-list");
    ullist.innerHTML = "";
    let bodyList = "";

    for(let i=0; i<toDoList.length; i++){
        bodyList += `<li> ${toDoList[i]}  <button onclick="remove()" type="button" class="btn btn-danger"> - </button></li>`;
    }

    ullist.innerHTML = bodyList;
}
function remove(index){
    toDoList.splice(index,1);
    showTask();
}