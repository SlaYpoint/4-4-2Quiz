const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlack.yellow.bold("Wassup lads?? You think you know premier league better? Play the 4-4-2 Quizz\n"));

const userName = readlineSync.question(chalk.magentaBright('Your name? \n'));

console.log(chalk.yellowBright(`\nHey ${userName}. Time to test your football knowledge!.\n`));

// Global variables
let score = 0;

const quesSet = [
  {
    ques : "How many teams play in the Premier League ?\na.32\nb.20\nc.18",
    ans : "b"
  },
  {
    ques : "Which club has won the Premier League the most times ?\na.Chelsea\nb.Arsenal\nc.Manchester United",
    ans : "c"
  },
  {
    ques : "Who are the current title holders?\na.Chelsea\nb.Liverpool\nc.Manchester City",
    ans : "a"
  },
  {
    ques : "Which manager has won the most Premier League titles ?\na.Arsene Wenger\nb.Sir Alex Ferguson\nc.Jose Mourinho",
    ans : "b"
  },
  {
    ques : "What is the name of the division below the Premier League ?\na.The Championship\nb.Secondary League\nc.League Two",
    ans : "a"
  },
  {
    ques : "Which is the only club to have been relegated after having won the Premier League?\na.Leeds United\nb.Tottenham Hotspurs\nc.Manchester City",
    ans : "c"
  },
  {
    ques : "Who holds the record for most number of clean sheets?\na.Peter Schmeichel\nb.Shaka Hislop\nc.Petr Cech",
    ans : "c"
  },
  {
    ques : "Most expesive signing?\na.Cristiano Ronaldo\nb.Jack Grealish\nc.Jadon Sancho",
    ans : "b"
  },
  {
    ques : "Who was the highest goalscorrer in the 2020-21 season?\na.Harry Kane\nb.Sergio Aguero\nc.Mohamed Salah",
    ans : "a"
  },
  {
    ques : "Which is the team with most number of Champions League titles ?\na.Manchester United\nb.Liverpool\nc.Chelsea",
    ans : "b"
  }
];

const leaderBoard = [
  {name: "Harish", score: 20},
  {name: "Julie", score: 18},
];

// take user input, validate answer, update score
for(let i=0; i<quesSet.length; i++){
  validateAnswer(i+1, quesSet[i].ques, quesSet[i].ans);
}

function validateAnswer(quesNo, ques, ans){
  const userAns = readlineSync.keyIn(chalk.cyanBright(`${quesNo}. ${ques} \n`), {limit: '$<a-c>'});

  if(userAns === ans){
    console.log(chalk.greenBright("Bang On! Take your point.\n"));
    score+=2;
  }else{
    console.log(chalk.redBright("You are Wrong :/\n"));
  }

  console.log(chalk.yellowBright(`Your current score is ${score}\n`));
  console.log('--------------------------\n');
} 

// Print final score
console.log(chalk.bgBlue(`Yay! Your Final Score is ${score}`));
console.log('--------------------------\n');

console.log(chalk.bgBlack.yellow.bold("\n\nLeaderboard Standings\n"));
for(let i=0; i< leaderBoard.length; i++){
  console.log(`${leaderBoard[i].name} : ${leaderBoard[i].score}`);
}