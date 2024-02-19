const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const questions = {

1: "What's your name? Nicknames are also acceptable :)",
2: "What's an activity you like doing?",
3: "What do you listen to while doing that?",
4: "Which meal is your favourite (eg: dinner, brunch, etc.)",
5: "What's your favourite thing to eat for that meal?",
6: "Which sport is your absolute favourite?",
7: "What is your superpower? In a few words, tell us what you are amazing at!"

};

const holdAnswers = [];


const askQuestion = (question) => { 
  return new Promise ((resolve) => {
    rl.question(question, (answer) => {
      holdAnswers.push(answer);
      resolve()
    })
  })
}

const createProfile = function() {
  const profileBio = `Hi, let me introduce myself. I'm ${holdAnswers[0]}. I like to ${holdAnswers[1]}. I like to listen to ${holdAnswers[2]} when I ${holdAnswers[1]}. I love ${holdAnswers[3]}. My favorite thing to have for ${
    holdAnswers[3]} is ${holdAnswers[4]}. My favorite sport is ${holdAnswers[5]}. I'm really amazing at ${holdAnswers[6]}. That's a little about me, nice to meet you.\n`
  return profileBio;
}

const runSurvey = async(obj) => {
  for(let key in obj) {
   await askQuestion(obj[key])
  }
  process.stdout.write(createProfile());
  rl.close();
}

runSurvey(questions)
