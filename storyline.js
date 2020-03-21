
//// Recursion stops because we insert path1 as a display for pressing q5a1
// let path1 = "This is where you have ended up -> Path1"

// PATH 2 


//// Recursion stops because we insert path1 as a display for pressing q5a2
// let path2 = "This is where you have ended up -> Path2"
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

// let QA51 = {
//     text: " question  ",
//     answers: [
//         { text: ". ", nextQuestion: QA41 },
//         { text: ".", nextQuestion: QA42 },
//     ]
// }

// let QA51 = {
//     text: " question  ",
//     answers: [
//         { text: ". ", nextQuestion: QA41 },
//         { text: ".", nextQuestion: QA42 },
//     ]
// }

let QEMIDI = {
    text: `<b>The End:</b><br> The gaming company that has funded developing "Maze shot" into "MIDI Maze" was Atari Corp. - an American manufacturer of computers and video game consoles. "MIDI Maze" made it to be one of the top game of the 80s. `,
    answers: [
        { text: "Credits:", },
        { text: "Restart your future", restart: true },
    ]
}


let QEMPIL = {
    text: `<b>The End:</b><br> Over several years you have finished "Pilgrim" and developed a beautiful relationship with Tom. You go back to US and present your game in COMDEX'89. However, you receive a rejecting review, claiming you have built a game that is almost impossible to win. `,
    answers: [
        { text: "Credits:", },
        { text: "Restart your future", restart: true },
    ]
}



// var a = ('<a https://archive.org/embed/malware_Q-CASINO.COM#loading />');


let QEMMW = {
    text: `<b>The End:</b><br>Macmillan Utilities,the antivirus company, could not find the user but was able to develop an antidote program that would stop the problems in the network. You've lost a lot of users and had to sell half of the company to pay for the antivirus program.`,
    answers: [
        { text: "See the virus", },
        { text: "Restart your future", restart: true },
    ]
}

let QEMUW = {
    text: `<b>The End:</b><br>You have stopped your network, every day you have lost dozens of users. however you were able to track down the source - it was MacMillan Utilities, the antivirus company who released the virus in the first place. - you were able to sue them and win the case. your userbase recovered. `,
    answers: [
        { text: "See the virus", },
        { text: "Restart your future", restart: true },
    ]
}




let QMG3 = { /// Game path alone
    text: "",
    answers: [
        { text: ". ", },
        { text: ".", },
    ]
}

let QMV3 = { /// Chatroom Path > move to SF
    text: `Developing chatrooms allowed Mutiny to grow and move to Sillicon Valley. However, your usernet started getting smaller in last few weeks. You find out that someone has been jeopardising "Mutiny" with an unseen computer program released into the network through an unknown user. Do you...`,
    answers: [
        { text: `To buy time, invite a speciallist company to solve this problem fo you. `, nextQuestion: QEMMW }, // "macmillan utilities, antivirus company cannot find the user but were able to develop an antidote program that will stop the problems in the network. You've lost a alot of users and have to sell half of the company to pay for the antivirus program."
        { text: `Freeze the network and track down the source. You risk losing your userbase even more.`, nextQuestion: QEMUW }, // You have stopped your network, every day you have lost dozens of users. however you were able to track down the source - it was "macmillan utilities, the antivirus company who released the virus in the first place. - you were able to sue them and win the case. your userbase recovered. "
    ]
}


let QMT2 = { /// TOM PATH>Game path
    text: `Since Tom has joined, you started developing two more games. This time: first person shooter "Maze Shot" and adventure based game "Pilgrim". As both of them gain popularity, (especially "Maze Shot"), Tom is "headhunted" and asked to join a high-level paying job in Tokyo as a software eng. He's asking you to come with him. Do you... `,
    answers: [
        { text: `Remain with Mutiny to finish developing "Maze Shot" for a gaming company. `, nextQuestion: QEMIDI },
        { text: `Move to Tokyo with Tom and qontinue with "Pilgrim". This is the biggest personal project you have done and you can't leave it behind. `, nextQuestion: QEMPIL },
    ]
}


let QMT3 = { /// CHAT PATH>money
    text: "The text based game that you've built is not picking up. You've noticed that your users are chatting more than they are playing. You decide to develop private chatrooms and it really gains popularity. Your company's equity increases. It's time to make a decision. Do you... ",
    answers: [
        { text: "Try and figure out how to remain a gaming company.", nextQuestion: QMG3 },
        { text: "Switch gears and go fully into online chatroom development.", nextQuestion: QMV3 },
    ]
}


let QMA1 = { ///Cam works alone > Tom -yes no> Japan- yes no
    text: `By yourself, you've managed to hire several programmers. Together you are developing a game called "Parallax",a text based fantasy adventure! You notice that someone has hacked your network, allowing them play subscription free. You track them down to where they live. As you knock, a young guy names Tom opens the door. It was his strategy of attracting your attention and asks you to hire him as a dev. Do you... `,
    answers: [
        { text: "This guy's going straight to jail.", nextQuestion: QMT3 },
        { text: "Fine, we need an obnoxious hacker on our team. Also - he'll work for free.", nextQuestion: QMT2 },
    ]
}

let QEDW = {
    text: `<b>The End:</b><br> As "Mutiny" went public, it's value plummited more than expected. No one cashed out in the end.`,
    answers: [
        { text: "Credits:", },
        { text: "Restart your future", restart: true },
    ]
}

let QMA2 = { /// Donna accepted - sell yes no > SF > Macmillan
    text: `You and your business partner are working really well in tandem. However, with Donna's influence "Mutiny" is becoming a basic service provider, rather than your envisioned gaming platform. You're developing communication tools between users that could become something bigger. You get an offer to go pulic. Donna and most of your team wants to sell. Do you.. `,
    answers: [
        { text: "Agree - this is not what you have envisioned for the company to become. You could re-start the gaming company.", nextQuestion: QEDW },
        { text: "Go against the team, and don't sell. You could raise more VC and move to San Francisco to develop what you have.", nextQuestion: QMV3 },
    ]
}














//////////////// PORTABLE PC
let QACE2 = { // The End
    text: "<b>The End:</b><br>Path of creating Portable PC ",
    answers: [
        { text: " Credits:  " },
        { text: " Restart your future", restart: true },
    ]
}



let QCE41 = { // Atari buys out cardiff - cam loses the game
    text: "<b>The End:</b><br>Your team has completed the demo well, but unfortunately got no press from the media. Your PC resembled all other PCs in the expo. In weeks to come, the sales of the PC did not pick up and your company had to be sold to a company called Atari. Since you've been working on a side project, it tecnically belonged to your company as an intellectual property. You lost rights to ever sell or produce it - it now belongs to Atari - a gaming company that bought out your utilities company.",
    answers: [
        { text: " Credits: ", },
        { text: " Restart your future", restart: true }
    ]
}


let QCE42 = { // Atari hires cameron
    text: "<b>The End:</b><br>Your team runs into a live demo problem that only you can fix, someone at the crowd watched you fix the bug to the problem they've been trying to tackle in their company. They come up to you after the demo. It's a gaming company called Atari - they want to hire you.",
    answers: [
        { text: " Credits: ", },
        { text: " Restart your future ", restart: true },
    ]
}





//////////////////// COMDEX CLOSED




let QAE72 = { // Cam saves the PC  and makes it the only competitor to Mac
    text: "<b>The End:</b><br>You have saved the GUI of the PC. The press picks your demo up and your PC is positioned as direct competitor to APPLE's Mackintosh, as these are only the two PCs after XEROX that are implementing GUI into their OSs.  ",
    answers: [
        { text: " Credits:  ", },
        { text: " Restart your future ", restart: true },
    ]
}


let QAE71 = { // Cam quits and cardiff goes bust because of mediocricy
    text: "<b>The End:</b><br>Two days later Apple Inc is demoing the the first Mackintosh in COMDEX. Everyone from your team realises that your GUI could have been the only competition possibility. Your company goes bust as the PC rapidly loses the interest due to its similarity to all other PCs in the market. ",
    answers: [
        { text: " Credits: ", },
        { text: " Restart your future ", restart: true },
    ]
}




let QAE61 = {
    text: " You and your team have arrived to COMDEX. You're doing a test demo run for the PC. Suddenly it's not loading and keeps on crashing. Joe and Gordon decide to completely remove the GUI from the PC, as to save the demo for tomorrow. Knowing your raction, they lock you out so you can't access the PC. Do you... ",
    answers: [
        { text: " Bang door and try convince them to let you in. Over the night you might be able to figure out how to save it for the tomorrow's showcase. ", nextQuestion: QAE72 }, /// The End: Saves the PC. The press picks it up and it is compared as a direct competitor to APPLE as it's only two pcs after XEROX that are implementing GUI into their OSs.
        { text: " Realise there's nothing you can do anymore. It will take the whole night either to remove it or to improve it. The risk of it STILL not working might completely jeopardise the demo. ", nextQuestion: QAE71 }, // The end: Two days later Apple Inc is demoing the the first Mackintosh in COMDEX. Everyone from your team realises that your GUI could have been the only competition possibility. Your company goes bust as the PC rapidly loses the interest due to its similarity to all other PCs in the market.
    ]
}




let QAE62 = { // The end where cam loses everything apart motorcycle
    text: "<b>The End:</b><br>You have taken a week away from work. You're ready to drive back as you receive a call from your product manager Joe, telling you that they had to take out the part of your GUI in order to make a live demo, as the PC was not loading the last minute. They have made contracts with production that same day and this will be the final release model. A day later Apple Inc is demoing the the first Mackintosh in COMDEX. Everyone realises that your GUI could have been the only competition possibility. Your company goes bust as the PC rapidly loses the interest due to its similarity to all other PCs in the market. ",
    answers: [
        { text: " Credits: ", }, // mutiny?
        { text: " Restart your future ", restart: true },
    ]
}



///////////////// APPLE ENDING

let QAE52 = { //The End with Mackintosh/1984 ad
    text: `<b>The End:</b><br>Your contribution to the industry will change its' landscape forever. It's the first Mackintosh. You're the person with the hammer in the "1984 ad. You're the mind behind the idea of "Hello. I'm Mackintosh." `,
    answers: [
        { text: " .... gif of the  ", },
        { text: "Restart your future", restart: true },
    ]
}




// let QAE51 = { //The end with wozniak
//     text: " The end - meek?  ",
//     answers: [
//         { text: " Credits:  ", },
//         { text: " Restart your future", },
//     ]
// }



let QA5 = {
    text: " Your idea to make computers interactive and speak back to the user had made the cut to the final product. Because of this feature you've been asked to participate in the marketing campaign of the release. ",
    answers: [
        { text: " Accept the invitation ", nextQuestion: QAE52 },
        { text: " You'd rather not ", nextQuestion: QACE2 },
    ]
}



let QA42 = {
    text: " Your idea was to make computers interactive. More like human. Maybe they can write out your name. Say hello to you. Out loud. No one has ever went here. It's your chance. To whom do you pitch it? ",
    answers: [
        { text: " Steve Jobs ", nextQuestion: QA5 },
        { text: " Steve Wozniak ", nextQuestion: QACE2 },
    ]
}



let QA41 = {
    text: " You haven't shared your idea. someone from CARDIFF electrics comes up with GUI in a live demo???? ", /// APPLE //// someone from CARDIFF electrics comes up with GUI in a live demo????
    answers: [
        { text: " Go to a question that gives you ", },
        { text: " ", },
    ]
}

/////////////////// WORK AT CARDIFF 

let QA441 = {
    text: "You have fully implemented your ideas, the first demo PC is ready to be demonstrated at COMDEX'83. However, you receive a call from your step mother informing you that she will be selling your dad's motorcycle, since it's the only valuable thing that is left after his passing from a year ago, and she would really benefit by cashing out. It's the last chance to save the motorcycle. Do you....:   ",
    answers: [
        { text: " Decide to go back to your childhood home and buy out your dad's motorcycle. He was the only close person you had growing up. ", nextQuestion: QAE62 },
        { text: " Get on a plane to Silicon Valley to attend the COMDEX conference. It's your first ever product that will be displayed amogst many industry's veterans. ", nextQuestion: QAE61 },/// PC doesnt load, they are arguing if they can make it run.
        /// The End: You have taken a week away from work.  You're ready to drive back as you receive a call from your product manager Joe, telling you that they had to take out the part of your GUI in order to make a live demo, as the PC was not loading the last minute. They have made contracts with production that same day and this will be the final release model. A day later Apple Inc is demoing the the first Mackintosh in COMDEX. Everyone realises that your GUI could have been the only competition possibility. Your company goes bust as the PC rapidly loses the interest due to its similarity to all other PCs in the market. 
    ]
}



let QA442 = { /////////// CREATE A GAME ON SIDE -  AVERAGE GUI - BUST, TAKES YOUR GAME AS INTELECTUAL PROPERTY
    text: ` Your own side project is a game - "Space Bike", called after your dad's motorcycle. You work on a game alongside wiritng the BIOS for your company. As the project is complete, your company asks you to join them in COMDEX'83 - the biggest computer hardware and software expo in the world. Do you... `,
    answers: [
        { text: " Stay at home to finalise your game. You needed this time to finally focus on your own creativity.", nextQuestion: QCE41 }, // The end: Goes to COMDEX, GETS BUST
        { text: " Join the team in the expo - it's a monumental moment. ", nextQuestion: QCE42 }, // The end: the team runs into a live demo problem that only you can fix, someone at the crowd watched you fix the bug to the problem they've been trying to tackle in their company. They come up to you after the demo. It's a gaming company called Atari. 
    ]
}





/// APPLE INC START WORK
let QA4 = {
    text: "Congratulations! You're now an official emploee of Apple Inc. They ask you to contribute to the finalising of the project they have been working on, it might be a defining factor to their project. ",
    answers: [
        { text: ` "I have been rejected too many times. If this fails, I risk my reputation and possibly whole future. I can't do it." `, nextQuestion: QA41 },
        { text: ` "I have an idea, but not sure if they will accept it. We can try. This could totally make me seem crazy." `, nextQuestion: QA42 },
    ]
}

let QA3 = { // MUTINY PATH
    text: "Being a cog in a wheel was never your thing anyway: Welcome to Mutiny - your company - one of the very first onine gaming platforms. You have to decide if you want to have a partner to run the company with. Do you... ",
    answers: [
        { text: "Decide to run the company by yourself.", nextQuestion: QMA1 },
        { text: "Know an engineer (Donna Clark) who could be just right - decide to talk her into joining you in this venture.", nextQuestion: QMA2 }, /// Create scenario where she meets Tom > Japan > Space Rider > Atari + Pilgrim
    ]
}



let QA32 = { // APPLE INTERVIEW
    text: `You're interviewing with Apple Inc. for a junior engineer position. It's the final round. You get the last question of the interview: "What is your ultimate desire in your career?" `,
    answers: [
        { text: "To be a part of a greater whole - knowing that I contributed to something that might change the world.", nextQuestion: QA4 },
        { text: "To create something special of my own that I can be proud of, though not quite sure what it is yet.", nextQuestion: QA3 },
    ]
}

///////////////// CARDIFF EARLY WORKS

let QA331 = { // CARDIFF WORK - MID
    text: " The lead hardware engineer accepted your ideas and is on board on implementing them. However, he realises that implementing ALL of the features will come at a cost at possibly slower CPU, compromising the speed of the PC. And that decides if it makes the cut to the market. Do you....:  ",
    answers: [
        { text: "Decide to fully implement your ideas, even at the cost of runtime. It's the only chance to make a difference in the PC landscape, and the door is closing soon with a lot of competition around.", nextQuestion: QA441 },
        { text: `Accept that faster CPU will require to tone down on the GUI features you've been building. Infact, the hardware engineer asks you to work on the idea he's been trying to implement.  `, nextQuestion: QACE2 },//// Portable PC
    ]
}




let QA31 = { // CARDIFF WORK - EARLY
    text: "You're now working in a basement office so you are not exposed to the rest of the company due to the legal conditions of writing the new BIOS. You have genius ideas how to make PCs interactive and captivating. This could be your moment to disrupt the status quo of the current computer market. Do you...: ",
    answers: [
        /// Make gordon accept it in QA331
        { text: `Start working on your own side project: "This company will never take this risk with me."`, nextQuestion: QA442 }, /// build a game
        { text: "Express your idea to the hardware engineer.", nextQuestion: QA331 },
    ]
}

let QA21 = { // CARDIFF WORK - EARLY
    text: `Welcome to the office of "Cardiff Electrics". You will be working in tandem with head business manager (Joe MacMillan) and head hardware engineer (Gordon Clark). Previous to your employment they have reversed engineered IBM PC BIOS and are facing a massive lawsuit. The only way to save the company is for you to write a completely new OS, without ever referencing to the BIOS code. Do you take the challenge?`,
    answers: [
        { text: "Look for another job. Do they think you're crazy? This can easily make you go to jail.", nextQuestion: QA32 },
        { text: "Take the challenge and seclude yourself to work. ", nextQuestion: QA31 },
        ///create alternate with cam looking for a job
    ]
}



let QA22 = { // START
    text: "You're on a verge of dropping out from the university. You're lacking money to sustain yourself. What do you do next?",
    answers: [
        { text: "Try and go back to the previous company to get a job there. - After that you can go back to finish your computer science degree.", nextQuestion: QA21 },
        { text: "Quit university and start your own company.", nextQuestion: QA3 },
    ]
}




let QA = { // START
    text: "It’s 1984. Your name is Cameron Howe. You're about to graduate as a software engineer in Texas, Dallas. Nothing matters to yo more than the future of coputers. You get an offer to quit university and take up job to write a new OS for a PC project for utilities company. Do you take the offer?",
    answers: [
        { text: "Take the offer, but with the only condition: to double your proposed salary.", nextQuestion: QA21 },
        { text: "Refuse and stay in the university.", nextQuestion: QA22, },
    ]
}







// let q2a1 =
// let q2a2 = "Take the challenge - don’t share your ideas. The experienced hardware engineers will make fun of you."




