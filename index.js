const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlack.yellow.bold("Wassup lads?? You think you know premier league better? Play the 4-4-2 Quizz ⚽\n"));

const userName = readlineSync.question(chalk.magentaBright('Your name? \n'));

console.log(chalk.yellowBright(`\nHey ${userName}👋. Time to test your football knowledge!🤓.\n`));

// Global variables
let score = 0;

const quesSet = [
  {
    ques: "How many teams play in the Premier League ?\na.32\nb.20\nc.18",
    ans: "b"
  },
  {
    ques: "Which club has won the Premier League the most times ?\na.Chelsea\nb.Arsenal\nc.Manchester United",
    ans: "c"
  },
  {
    ques: "Who are the current title holders?\na.Chelsea\nb.Liverpool\nc.Manchester City",
    ans: "c"
  },
  {
    ques: "Which manager has won the most Premier League titles ?\na.Arsene Wenger\nb.Sir Alex Ferguson\nc.Jose Mourinho",
    ans: "b"
  },
  {
    ques: "What is the name of the division below the Premier League ?\na.The Championship\nb.Secondary League\nc.League Two",
    ans: "a"
  },
  {
    ques: "Which is the only club to have been relegated after having won the Premier League?\na.Leeds United\nb.Tottenham Hotspurs\nc.Manchester City",
    ans: "c"
  },
  {
    ques: "Who holds the record for most number of clean sheets?\na.Peter Schmeichel\nb.Shaka Hislop\nc.Petr Cech",
    ans: "c"
  },
  {
    ques: "Most expesive signing?\na.Cristiano Ronaldo\nb.Jack Grealish\nc.Jadon Sancho",
    ans: "b"
  },
  {
    ques: "Who was the highest goalscorrer in the 2020-21 season?\na.Harry Kane\nb.Sergio Aguero\nc.Mohamed Salah",
    ans: "a"
  },
  {
    ques: "Which is the team with most number of Champions League titles ?\na.Manchester United\nb.Liverpool\nc.Chelsea",
    ans: "b"
  },
  {
    ques: "Which Manager was knighted by the Queen Elizabeth II?\na.Sir Reniere\nb.Sir Alex Ferguson\nc.Arsene Wenger",
    ans: "b"
  },
  {
    ques: "Who is the highest ALL-time goal scorer in PL history?\na.Harry Kane\nb.Thierry Henry\nc.Alan Shearer",
    ans: "c"
  },
  {
    ques: "1996-97. How many points were Middlesbrough deducted for failing to fulfil a fixture against Blackburn in December?\na.Six\nb.One\nc.Three",
    ans: "c"
  },
  {
    ques: "2001-02. What did Arsenal do in the 2001-02 season that had not been done before in the Premier League?\na.They did not lose an away match all season\nb.They scored 100 goals\nc.They went unbeaten all season",
    ans: "a"
  },
  {
    ques: "2003-04. Two clubs avoided defeat to Arsenal in the Invincibles season. Manchester United and ...?\na.Newcastle\nb.Portsmouth\nc.Chelsea",
    ans: "b"
  },
  {
    ques: "2010-11. Who was Roberto Mancini referring to when he said: “We were beaten by a moment of pure genius”?\na.Wayne Rooney\nb.Michael Owen\nc.Paul Scholes",
    ans: "a"
  },
];

const leaderBoard = [
  { name: "Harish", score: 20 },
  { name: "Julie", score: 18 },
  { name: "Aman", score: 16 }
];

// take user input, validate answer, update score
for (let i = 0; i < quesSet.length; i++) {
  if (i === 3) {
    if (score >= 4) {
      console.log(chalk.magenta("✅ You entered Level 2. Let's not make it that easy now 😉 \n"));
    }
    else {
      console.log("Sorry! You are not going ahead ☹️");
      break;
    }

  } else if (i === 6) {
    if (score >= 8) {
      console.log(chalk.magenta("✅ You entered Level 3. You are just getting there 😲, think before you pick you answer... \n"));
    }
    else {
      console.log("Sorry! You are not going ahead ☹️");
      break;
    }
  } else if (i === 12) {
    if (score >= 16) {
      console.log(chalk.magenta("✅ You entered Level 4. Things could get hard from here..\n"));
    }
    else {
      console.log("Sorry! You just missed from entering into the final round ☹️");
      break;
    }
  }

  validateAnswer(i + 1, quesSet[i].ques, quesSet[i].ans);
}

// Print final score
console.log(chalk.bgBlue(`Yay! Your Final Score is ${score}.`));

//Leader board
let didIBeat = false;
let myIndex = 0;

for (let i = 0; i < leaderBoard.length; i++) {
  if (score >= leaderBoard[i].score) {
    didIBeat = true;
    myIndex = i;
    leaderBoard.splice(myIndex, 0, { name: userName, score });
    break;
  }
}

showLeaderboard(leaderBoard);

if (didIBeat) {
  console.log(chalk.yellowBright(`\nWohooo! 🎉 Congratulations ${userName}! You have climbed up the ranks🔥\n`));
}


//Utils
function validateAnswer(quesNo, ques, ans) {
  const userAns = readlineSync.keyIn(chalk.cyanBright(`${quesNo}. ${ques} \n`), { limit: '$<a-c>' });

  if (userAns === ans) {
    console.log(chalk.greenBright("Bang On! Take your point.\n"));
    score += 2;
  } else {
    console.log(chalk.redBright("You are Wrong :/\n"));
  }

  console.log(chalk.yellowBright(`Your current score is ${score}\n`));
  console.log('--------------------------\n');
}

function showLeaderboard(leaderBoard) {
  console.log(chalk.bgBlack.yellow.bold("\n\n🔝 Leaderboard Standings\n"));

  console.table(leaderBoard);
}
