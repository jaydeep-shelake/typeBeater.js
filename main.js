 const easyBtn = document.getElementById('easy');
 const mediumBtn = document.getElementById('medium');
 const hardBtn = document.getElementById('hard')
 const startBtn = document.getElementById('start-btn')
 
startBtn.addEventListener('click',init);
 const level={
     easy:5,
     medium:4,
     hard:3,
 }
 
 let changeLevel=level.easy;
 let time=changeLevel
easyBtn.addEventListener('click',()=>{
    changeLevel=level.easy;
    time=changeLevel;
    seconds.innerText=time
})
 mediumBtn.addEventListener('click',()=>{
    changeLevel=level.medium;
    time=changeLevel;
    seconds.innerText=time;
    // console.log(time);
});

hardBtn.addEventListener('click',()=>{
    changeLevel=level.hard;
    time=changeLevel;
    seconds.innerText=time;
    // console.log(time);
})


//  
 

 
 
 
// let time=changeLevel;
let score=0;
let isPlaying;


const wordInput=document.getElementById('word-input');
const seconds = document.getElementById('seconds');
const currentWord=document.getElementById('current-word');
const message=document.getElementById('message');
const timeDisplay=document.getElementById('time');
const scoreDisplay=document.getElementById('score');

const words=['hat','pizaa','goal','Help','railway','Devine','javascript','html','CSS','react','node','bootsrap','Sass','express','mongodb',
'git','github','master','branch'];

function init(){
    startBtn.style.display='none';
    // seconds.innerText=time;
    showWords(words);//function to display random word
    wordInput.addEventListener('input',match);
     
    setInterval(showTime,1000);//
    setInterval(checkSatus,50);

}
// function to show random word
function showWords(word){
    const wordindex= Math.floor(Math.random()*word.length);

    currentWord.innerHTML= word[wordindex];
}


//function to show the time

 function match(){
    if(wordMatch()){
      isPlaying=true;
      time=changeLevel+1;
      showWords(words);
      wordInput.value='';
      score++;
    }
    if(score==-1){
        scoreDisplay.innerHTML=0;
    }
    else{
        scoreDisplay.innerHTML=score;
    }
}
 //function to match the word
 function wordMatch(){
     if(wordInput.value==currentWord.innerHTML){
         message.innerHTML='Correct..!';
         message.classList.add('text-success');
         message.classList.remove('text-danger');
         return true
     }
     else{
         message.innerHTML='';
         return false;
     }
 }



function showTime(){
    if(time>0){
        time--;  
    }
    else if(time==0){
        
         isPlaying=false;
    }
     timeDisplay.innerHTML=time;
 }

 //check status of game
 function checkSatus(){
    if(!isPlaying && time==0){
        message.innerHTML='Game over..!!'
        message.classList.remove('text-success');
         message.classList.add('text-danger');
        score=-1;
    }
}
