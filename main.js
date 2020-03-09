




////////////////////// ENTER BTN


let enter = document.querySelector(".enter,button2")
let main = document.querySelector(".main")
let head = document.querySelector(".head")
let subtxt = document.querySelector(".subtxt")
let inter = document.querySelector(".interactive")

let answer1 =  document.querySelector(".A1")
let answer2 = document.querySelector(".A2");

let question = document.querySelector(".question")


// let newsubtxt = subtxt.style.display = "bloc"


function changeText(target,input){
let index = 0;
target.innerHTML = `<span class="hidden">.</span>`
    let interval = setInterval(function () {
        target.innerHTML=target.innerHTML+input[index]
        if(index===input.length-1){
            clearInterval(interval)
        }
        index++
    },40)
}







enter.onclick= function () { 
    enter.style.display="none"
    
    setTimeout(() => {
     head.style.display="block"   
    }, 700);


    setTimeout(() => {
        subtxt.style.display="block"   
       }, 2300);
   


       setTimeout(() => {
        question.style.display="block"   
       }, 4500);

       setTimeout(() => {
        answer1.style.display="block"   
       }, 6000);

       setTimeout(() => {
        answer2.style.display="block"   
       }, 6000);




    ;
    
    
 }





console.log(answer1)

// let changeA = answer1.innerHTML
// let changeB = answer2.innerHTML




let choicetxt = "EVERY CHOICE WILL RENDER YOUR PATH"


////////////////////////////////////////

let q1 = "Black or White?"
// let layerQ1 = [q1]
let q1a1 = "White"
let q1a2 = "Black"
let layerA1 = [q1a1, q1a2]

    

////////////// First Level


answer1.onclick = function () {
    
    changeText(question,q2)
    setTimeout(function(){ changeText(answer1,q2a1);
        },2000)
        setTimeout(function(){ 
            changeText(answer2,q2a2);},3000)
    
}

answer2.onclick = function () {
    
    changeText(question,q1)
    setTimeout(function(){ changeText(answer1,q1a1);
        },2000)
        setTimeout(function(){ 
            changeText(answer2,q1a2);},3000)
    
}






// answer2.onclick = answer1.onclick = function () {
    
//     question.innerHTML = q2;
//     answer1.innerHTML = q2a1;
//     answer2.innerHTML = q2a2;


// }


let layerQ2 = [];
let q2 = "Welcome to the office. You will be working in tandem with head product manager (Joe) and head hardware engineer (Gordon). Previous to your employment they have reversed engineered IBM PC BIOS and will are facing a massive lawsuit. The only way to save the company is for you to write a completely new OS, without ever referencing to the BIOS code. Do you take the challenge?"

let q2a1 = "Take the challenge - you have genius ideas how to make PCs interactive and captivating."
let q2a2 = "Take the challenge - don’t share your ideas. The experienced hardware engineers will make fun of you."



////////////////

let q3 = "........"

let a3 = "......."
let a4 = "......."



if (answer1.innerHTML === q2a1) {
answer1.onclick = function () {
    
    changeText(question,q3)
    setTimeout(function(){ changeText(answer1,a3);
        },2000)
        setTimeout(function(){ 
            changeText(answer2,a4);},3000)
    
}
}


//////
// Do you understand the problem?


