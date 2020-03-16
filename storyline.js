
//// Recursion stops because we insert path1 as a display for pressing q5a1
let path1 = "This is where you have ended up -> Path1"

// PATH 2 


//// Recursion stops because we insert path1 as a display for pressing q5a2
let path2 = "This is where you have ended up -> Path2"




//////// PATH ONE

//let QA = "It’s 1984. Your name is Cameron Howe. You are a young undergraduate software engineer in Texas, Dallas. You get an offer to write a new OS for a PC project for utilities company. Do you take the offer?";
//let a1 = "Take the offer, but with the only condition: to double your proposed salary.";
//let a2 = "Refuse and stay in university.";

/// FROM A1


// let QA51 = {
//     text: " question  ",
//     answers: [
//         { text: ". ", nextQuestion: QA41 },
//         { text: ".", nextQuestion: QA42 },
//     ]
// }

let QA6 = {
    text: " question  ",
    answers: [
        { text: ". ", },
        { text: ".", },
    ]
}

let QA52 = { //The End
    text: ` Your contribution to the industry will change its' landscape forever. It's the first Mackintosh. You're the girl in the "1984 ad. You're the girl behind the idea of "Hello. I'm Mackintosh." `,
    answers: [
        { text: " .... gif of the  ", },
        { text: " Link to Joe seeing the Mackintosh ", },
    ]
}




let QA51 = { //The end
    text: " The end - meek?  ",
    answers: [
        { text: " display of the end ", },
        { text: " display of the end", },
    ]
}



let QA5 = {
    text: " Your idea to make computers interactive and speak back to the user had made the cut to the final product. Because of this feature you've been asked to participate in the marketing campaign of the release. ",
    answers: [
        { text: " Accept the invitation ", nextQuestion: QA52 },
        { text: " You'd rather not ", nextQuestion: QA51 },
    ]
}

// Your contribution to the industry will change its' landscape forever. It's the first Mackintosh.






let QA42 = {
    text: " Your idea was to make computers interactive. More like human. Maybe they can write out your name. Say hello to you. Out loud. No one has ever went here. It's your chance. To whom do you pitch it? ",
    answers: [
        { text: " Steve Jobs ", nextQuestion: QA5 },
        { text: " Steve Wozniak ", nextQuestion: QA51 },
    ]
}



let QA41 = {
    text: " You haven't shared your idea.  ",
    answers: [
        { text: " Go to a question that gives you ", nextQuestion: QA6 },
        { text: " ", nextQuestion: QA42 },
    ]
}




/// FROM q2a1
let QA4 = {
    text: "Congratulations! You're now an official emploee of Apple Inc. They ask you to contribute to the finalising of the project they have been working on, it might be a defining factor to their project. ",
    answers: [
        { text: "I have been rejected too many times. If this fails, I risk my reputation and possibly whole future. I can't do it. ", nextQuestion: QA41 },
        { text: "I have an idea, but not sure if they will accept it. We can try. This could totally make me seem crazy.", nextQuestion: QA42 },
    ]
}

let QA3 = {
    text: "Welcome to Mutiny - this is your company. You have to decide if you want to have a partner to run the company with. Donna (Gordon's wife) seems to be the type of person you need to balance your character.",
    answers: [
        { text: "Q3 Answer 1", },
        { text: "Q3 Answer 2", }, /// Create scenario where she meets Tom > Japan > Space Rider > Atari + Pilgrim
    ]
}



let QA32 = {
    text: `You're interviewing with Apple Inc. for a position. It's the final round. You get the last question: "bkakjbdkjabf" `,
    answers: [
        { text: "Correct Answer", nextQuestion: QA4 },
        { text: "Wrong answer - create path to Mutiny", nextQuestion: QA3 },
    ]
}


let QA331 = {
    text: " The lead hardware engineer rejects your offer  ",
    answers: [
        { text: " display of the end ", nextQuestion: QA52 },
        { text: " display of the end", nextQuestion: QA52 },
    ]
}



/// FROM q2a1
let QA31 = {
    text: "You're now working in a basement office so you are not exposed to the rest of the company due to the legal conditions of writing the new BIOS. You have genius ideas how to make PCs interactive and captivating. This could be your moment to disrupt the status quo of the current computer market. Do you...: ",
    answers: [
        { text: "Express your idea to the hardware engineer?", nextQuestion: QA3 }, /// Make gordon reject it in QA331
        { text: "Start working on your own side project. This company will never take this risk.", nextQuestion: QA3 },
    ]
}

let QA21 = {
    text: "Welcome to the office. You will be working in tandem with head product manager (Joe) and head hardware engineer (Gordon). Previous to your employment they have reversed engineered IBM PC BIOS and will are facing a massive lawsuit. The only way to save the company is for you to write a completely new OS, without ever referencing to the BIOS code. Do you take the challenge?",
    answers: [
        { text: "Take the challenge and seclude yourself to work. ", nextQuestion: QA31 },
        { text: "Look for another job. Do they think you're crazy? This can easily make you go to jail.", nextQuestion: QA32 }, ///create alternate with cam looking for a job
    ]
}



let QA22 = {
    text: "You're on a verge of dropping out from the university. You're lacking money to sustain yourself. What do you do next?",
    answers: [
        { text: "Try and go back to the previous company to get a job there. - After that you can go back to finish your computer science degree.", nextQuestion: QA21 },
        { text: "Quit university and start your own company.", nextQuestion: QA3 },
    ]
}




let QA = {
    text: "It’s 1984. Your name is Cameron Howe. You're about to graduate as a software engineer in Texas, Dallas. Nothing matters to yo more than the future of coputers. You get an offer to quit university and take up job to write a new OS for a PC project for utilities company. Do you take the offer?",
    answers: [
        { text: "Take the offer, but with the only condition: to double your proposed salary.", nextQuestion: QA21 },
        { text: "Refuse and stay in the university.", nextQuestion: QA22 },
    ]
}







// let q2a1 =
// let q2a2 = "Take the challenge - don’t share your ideas. The experienced hardware engineers will make fun of you."




