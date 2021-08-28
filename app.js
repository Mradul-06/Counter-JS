const decreasebtn = document.querySelector(".btn.decrease")
const resetbtn = document.querySelector(".btn.reset")
const increasebtn = document.querySelector(".btn.increase")
let countValue = document.querySelector("#value")
count = countValue.value;
count = 0;
function decreaseValue(){
    count -= 1
    countValue.textContent = count
}
function resetValue(){
    count = 0
    countValue.textContent = count
    
}
function increaseValue(){
    count += 1
    countValue.textContent = count
}

decreasebtn.addEventListener("click",decreaseValue)
resetbtn.addEventListener("click",resetValue)
increasebtn.addEventListener("click",increaseValue)
