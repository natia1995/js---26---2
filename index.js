var inp = document.querySelector(".x1")
var myh1 = document.querySelector("h1")
var myh3 = document.querySelector("h3")

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function x(){
    myh1.innerText = inp.value
    if (myh1.innerText > 0 && myh1.innerText < arr.length) {
        arr[myh1.innerText - 1]
        myh3.innerText = "შედეგი მოიძებნა"
        myh3.style.color = "rgb(17, 177, 17)"
    }
    else {
        myh3.innerText = "შედეგი ვერ მოიძებნა"
        myh3.style.color = "red"
    }
    
}
