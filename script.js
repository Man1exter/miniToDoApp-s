const $mainUl = document.querySelector("ul");
const $liElement = document.querySelectorAll("li");
const $buttonAcc = document.querySelector(".a1");
const $buttonDel = document.querySelector(".b1");

const $input = document.querySelector("input");


const deleteAll = (e) => {

    e.target.parentNode.remove()
}

const acceptAll = (e) => {

    e.target.parentNode.style.color = "gray";
    e.target.parentNode.style.fontSize = 10 + "px";
    e.target.parentNode.style.lineHeight = 60 + "px";
}

const searchTask = (e) => {

  const searchItem = e.target.value.toLowerCase(); 
  let task = [...$liElement];

  task = task.filter(li => li.textContent.toLowerCase().includes(searchItem));

  $mainUl.textContent = '';
  task.forEach(li => $mainUl.appendChild(li));
};



$input.addEventListener("input", searchTask);

document.querySelectorAll("button.b1").forEach(ele => ele.addEventListener("click", deleteAll));
document.querySelectorAll("button.a1").forEach(ele => ele.addEventListener("click", acceptAll));