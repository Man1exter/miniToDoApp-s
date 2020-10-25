const $mainUl = document.querySelector("ul");
const $buttonAcc = document.querySelector(".a1");
const $buttonDel = document.querySelector(".b1");




const deleteAll = (e) => {
    e.target.parentNode.remove()
}

const acceptAll = () => {
    
}


document.querySelectorAll("li button").forEach(ele => ele.addEventListener("click", deleteAll));
document.querySelectorAll("li button").forEach(ele => ele.addEventListener("click", acceptAll));