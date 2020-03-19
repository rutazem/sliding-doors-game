




////////////////////// ENTER BTN

let choicetxt = "EVERY CHOICE WILL RENDER YOUR PATH"

let enter = document.querySelector(".enter,button2")
let main = document.querySelector(".main")
let head = document.querySelector(".head")
let subtxt = document.querySelector(".subtxt")
let inter = document.querySelector(".interactive")

let answer1 = document.querySelector(".A1")
let answer2 = document.querySelector(".A2");

let question = document.querySelector(".question")


// let newsubtxt = subtxt.style.display = "bloc"

////////// TYPED TEXT CHANGE
function changeText(target, input) {
    //alert(input)
    target.innerHTML = `<span class="hidden">.</span>`
    let writeALetter = function (index) {
        //alert('hey')
        target.innerHTML = target.innerHTML + input[index]
        if (index === input.length - 1) {
            //clearInterval(interval)
        } else {
            setTimeout(() => writeALetter(index + 1), 40)
        }
    }
    writeALetter(0)
}


//////////// STATIC TEXT CHANGE

// function questionChange(randomQuestion){
//     question.innerhtml = `<span class="hidden">.</span>` + randomQuestion
// }




////////////// START GAME

enter.onclick = function () {
    enter.style.display = "none"

    setTimeout(() => {
        head.style.display = "block"
    }, 700);


    setTimeout(() => {
        subtxt.style.display = "block"
    }, 2300);



    setTimeout(() => {
        question.style.display = "block"
    }, 4500);

    setTimeout(() => {
        answer1.style.display = "block"
    }, 6000);

    setTimeout(() => {
        answer2.style.display = "block"
    }, 6000);

    ;

}







function renderQuestion(q) {

    question.innerHTML = q.text;
    //changeText(question, questionOBJ.questionOne)

    renderAnswer(answer1, q.answers[0]);

    renderAnswer(answer2, q.answers[1])

}


renderQuestion(QA)



////////// Resursive function


function renderAnswer(domElement, answer) {

    console.log(answer)

    if (answer.restart === true) {
        domElement.onclick = () => window.location.reload()
    } else if (answer.nextQuestion) {

        domElement.onclick = () => renderQuestion(answer.nextQuestion)

    } else {
        domElement.onclick = () => console.log("finished")
    }
    changeText(domElement, answer.text)

    // domElement.innerHTML = answer.answer
}








// let firstAnswer = () => {

//     question.innerHTML = q3

//     changeText(answer1, a3);

//     changeText(answer2, a4)

// }

// answer2.onclick = firstAnswer
// changeText(answer1, q2a1);

// changeText(answer2, q2a2)





// answer2.onclick = answer1.onclick = function () {

//     question.innerHTML = q2;
//     answer1.innerHTML = q2a1;
//     answer2.innerHTML = q2a2;


// }






// answer1.onclick = function () {


//     question.innerHTML = q2

//     changeText(answer1, q2a1);

//     changeText(answer2, q2a2)

//     if (answer1.innerHTML === q2a1) {

//         question.innerHTML = q3

//         changeText(answer1, a3);

//         changeText(answer2, a4)
//     }


// }

// if (answer1.innerHTML === q2a1) {
// answer1.onclick = function () {

//     changeText(question,q3)
//     setTimeout(function(){ changeText(answer1,a3);
//         },2000)
//         setTimeout(function(){ 
//             changeText(answer2,a4);},3000)

// }
// }


//////
// Do you understand the problem?


//////////////////////



// let changeA = answer1.innerHTML
// let changeB = answer2.innerHTML







////////////////////////////////////////

// let q1 = "Black or White?"
// // let layerQ1 = [q1]
// let q1a1 = "White"
// let q1a2 = "Black"
// let layerA1 = [q1a1, q1a2]



////////////// First Level


// answer1.onclick = function () {

//     question.innerHTML = q2

//     changeText(answer1, q2a1);

//     changeText(answer2, q2a2)

// }
