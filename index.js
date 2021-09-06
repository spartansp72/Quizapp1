
var readlineSync = require('readline-sync')
var userName = readlineSync.question("Enter your name:")
console.log("Hello there,",userName,"! Welcome to 'how well do you know ALI!!")
var score=0
function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Congratulations!!,",answer,"is correct :)")
    score++;

  }
  else{
    console.log("Better Luck next time!!",userAnswer,"is wrong :(")
  }
  console.log("Your score is:",score)
  console.log("***********************************")
}

//Using objects in an array

var q = [{
  question:"His Favriote Movie:",
  answer:'her'
},{
  question:'His Pets name:',
  answer:'zohan'
}
,{
  question:'His star sign?',
  answer:'Libra'

}
,{
  question:'His Favriote football club? ',
  answer: 'arsenal'
}
,{
  question:'Who made him fall in love with football?  ',
  answer:'ronaldinho'
}
,{
  question:'His Birthday in dd/mm/yyyy: ',
  answer:'08/10/1998'
}

,{
  question:'What did he want to be when he was young?',
  answer:'journalist'
}
,{
  question:"His Favriote Band?",
  answer:"Oasis"
},
{
  question:"His Favriote color?",
  answer:"Red"
},
{
  question:"His age:",
  answer:"22"
}]
//loop
for(i=0;i<=q.length-1;i++){
  play(q[i].question,q[i].answer)
}
var highScore = 9
console.log("HighScore:",highScore)
console.log("Your Score:",score)
if(score>highScore){
  console.log("WELL DONE!! you seem to know him the best, Send him a screenshot of your score so he may add it to the highscore list. ")
}
else{
  console.log("Good try but it seems, there are a few, who know him better than you :P")
}
console.log("******************************************************************************************")