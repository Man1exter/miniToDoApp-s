const $mainUl = document.querySelector("ul");
const $liElement = document.querySelector("li");
const $buttonAcc = document.querySelector(".a1");
const $buttonDel = document.querySelector(".b1");




const deleteAll = (e) => {
    e.target.parentNode.remove()
}

const acceptAll = (e) => {
    e.target.parentNode.style.textDecoration = "line-through";
}


document.querySelectorAll("li button.b1").forEach(ele => ele.addEventListener("click", deleteAll));
document.querySelectorAll("li button.a1").forEach(ele => ele.addEventListener("click", acceptAll));