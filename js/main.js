var letters = document.getElementsByClassName('letter')[1];
var currentid="";
var misses = 8;
var missindex=1;
var currentword;
var currentwordlength=0;
var guessedword=[];
var wordarray = [];

// letters.addEventListener('click', function (event) {
//   var target = event.target || event.srcElement;
//   currentletter=target.id;
//   console.log(currentletter)
// });
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
//choose random word
var randnum = Math.floor((Math.random() * 100) + 1)
currentword=commonWords[randnum];
//determine it's length
currentwordlength=currentword.length;
//build inital word with all blanks
for(var i = 0;i<currentwordlength;i++){
  guessedword[i]=" _ ";
}
//put in intial word
document.getElementById('word').innerHTML="<p>" + guessedword + "</p>";

//create array of chosen word
wordarray=currentword.split("");

console.log(currentword)
console.log(guessedword)
//click event for letters
document.addEventListener('click', function(e) {
    currentid=e.target.id;
      var letters = document.getElementById(currentid);
      if (letters.className=="grayit"){
        alert("That letter was already chosen!")
        return;
      }
      letters.className = ("grayit");

      var missed=true;
wordarray.forEach(function(value, index,array){
if(value==currentid){
guessedword[index] = currentid;
  document.getElementById('word').innerHTML="<p>" + guessedword + "</p>";
  missed=false;
}
});
//check if you won the game
var youwin=true;
guessedword.forEach(function(value, index,array){
  if(array[index]==" _ "){
    console.log("itworks")
    youwin=false
  }
})
if(youwin==true){
  var div = document.getElementById('lettercontainer');
while(div.firstChild){
    div.removeChild(div.firstChild);
}
div.innerHTML="<p style ='text-align:center; font-size:40px'>YOU WIN</p>"
document.getElementById('image').src = ("src","images/hmanwin.gif")
}
//what happens during a missed selection
if(missed==true){
  misses-=1;
  missindex+=1;
      document.getElementById('image').src = ("src","images/hman" + missindex + ".gif")
  document.getElementById('Misses').innerHTML="Misses left: " + misses;
  document.getElementById('Misses')
  if(misses==0){
    var div = document.getElementById('lettercontainer');
  while(div.firstChild){
      div.removeChild(div.firstChild);
  }
div.innerHTML="<p style ='text-align:center; font-size:40px'>YOU LOSE</p>"
  }
}
});
