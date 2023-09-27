// getting access of the inputbox
let input=document.getElementById("inputbox");
//  getting access of the add button
let add=document.getElementById("add");
// getting access of the list container ul
let listContainer=document.getElementById("listcontainer");
let completed;
let del;
// adding event listener to the add button
add.addEventListener("click",()=>{

    // check is the value of the input box is valid or not
    if(input.value === "")
    {
        alert("enter your task first");
        return;
    }
    
    // creting li element
    let li=document.createElement("li");
    // creating a div element
    let task=document.createElement("div");
    // add class to the div task
    task.classList.add("task");
    // creating a span element and giving value as the input box value to show in the li
    let span= document.createElement("span");
    span.innerHTML=input.value;

    // creating a div element name buttons
    let buttons=document.createElement("div");
    // adding class to the div buttons
    buttons.classList.add("buttons");

    // creating a button name completed and adding class "comp" to it and sets its value to "completed"
    completed=document.createElement("button");
    completed.classList.add("comp");
    completed.innerHTML="completed";

    // creating a button name del and adding class "del" to it and sets its value to "Delete"
    del=document.createElement("button");
    del.classList.add("del");
    del.innerHTML="Delete";
    
    // append both the buttons into buttons div
    buttons.appendChild(completed);
    buttons.appendChild(del);

    // adding text and buttons div into task div
    task.appendChild(span);
    task.appendChild(buttons);

    // append the task  div into li
    li.appendChild(task);

    // append the li into list container "ul"
    listContainer.appendChild(li);

    // sets the inputbox value
    input.value="";
    // call the setData() for storing the data into localStorage
    setData();
});

// adding eventListener to the listcontainer
listContainer.addEventListener("click",()=>{

   
// use querySelectorAll for select all the buttons and convert them into array
    let comp=listContainer.querySelectorAll(".comp");
    let comps=Array.from(comp);

// forEach method for the adding eventListener for each element having className comp.
    comps.forEach((comp)=>{
        comp.addEventListener("click",()=>{
            comp.parentElement.previousElementSibling.style.color="green";

            comp.parentElement.previousElementSibling.style.textDecoration="line-through";

            setData();
        })
    })

// forEach method for the adding eventListener for each element having className del
    let del=listContainer.querySelectorAll(".del");
    let dels=Array.from(del);
    dels.forEach((del)=>{
        del.addEventListener("click",()=>{
            del.parentElement.parentElement.parentElement.remove();
            setData();
        })
    })
})

// function for storing the data into localStorage.
function setData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
//eventListener when the loads the data should retrieve from the localStorage.
window.addEventListener("load",()=>{
    listContainer.innerHTML=localStorage.getItem("data");
})