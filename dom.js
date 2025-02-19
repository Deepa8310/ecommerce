//selecting by ID
//const title=document.getElementById("title");
//console.log(title);
//console.log(title.textContent);

//selecting by Class
const paragraphs=document.getElementsByClassName("description");
console.log(paragraphs);
console.log(paragraphs[0].textContent);

//selecting by Tag Name
const listItems=document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[0].textContent);

//using querySelector
const firstParagraph=document.querySelector(".description");
console.log(firstParagraph);
console.log(firstParagraph.textContent);

//using querySelectorAll
const allListItems=document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item) => console.log(item.textContent));

const title=document.getElementById("title");
title.textContent = "Upadated DOM Title";
title.style.color = "white";
title.style.backgroundColor = "blue";
title.classList.add("something");

const list=document.getElementById("list");
const newItem=document.createElement("li");
newItem.textContent = "Item 3";
list.appendChild(newItem);

const firstItem=document.querySelector("#list li");
list.insertBefore(newItem, firstItem);

const button=document.getElementById("btn");

function sayHello() {
    console.log("hello");
} 

button.addEventListener("click",sayHello)

//button.removeEventListener("click",sayHello)

localStorage.setItem("place name","haveri");
console.log(localStorage.getItem("place name"));
localStorage.removeItem("place name");                 
 
sessionStorage.setItem("name","deepa" );
console.log(sessionStorage.getItem("name"));