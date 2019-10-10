const textJSON = {
    "·–": {
      "value": "a"
    },
    "–···": {
      "value": "b"
    },
    "–·–·": {
      "value": "c"
    },
    "–··": {
      "value": "d"
    },
    "·": {
      "value": "e"
    },
    "··–·": {
      "value": "f"
    },
    "––·": {
      "value": "g"
    },
    "····": {
      "value": "h"
    },
    "··": {
      "value": "i"
    },
    "·–––": {
      "value": "j"
    },
    "–·–": {
      "value": "k"
    },
    "·–··": {
      "value": "l"
    },
    "––": {
      "value": "m"
    },
    "–·": {
      "value": "n"
    },
    "–––": {
      "value": "o"
    },
    "·––·": {
      "value": "p"
    },
    "––·–": {
      "value": "q"
    },
    "·–·": {
      "value": "r"
    },
    "···": {
      "value": "s"
    },
    "–": {
      "value": "t"
    },
    "··–": {
      "value": "u"
    },
    "···–": {
      "value": "v"
    },
    "·––": {
      "value": "w"
    },
    "–··–": {
      "value": "x"
    },
    "–·––": {
      "value": "y"
    },
    "––··": {
      "value": "z"
    },
    "·––––": {
      "value": "1"
    },
    "··–––": {
      "value": "2"
    },
    "···––": {
      "value": "3"
    },
    "····–": {
      "value": "4"
    },
    "·····": {
      "value": "5"
    },
    "–····": {
      "value": "6"
    },
    "––···": {
      "value": "7"
    },
    "–––··": {
      "value": "8"
    },
    "––––·": {
      "value": "9"
    },
    "–––––": {
      "value": "0"
    },
    "·-···": {
      "value": "&"
    },
    "·----·": {
      "value": "'"
    },
    "·--·-·": {
      "value": "@"
    },
    "-·--·-": {
      "value": ")"
    },
    "-·--·": {
      "value": "("
    },
    "---···": {
      "value": ":"
    },
    "--··--": {
      "value": ","
    },
    "-···-": {
      "value": "="
    },
    "-·-·--": {
      "value": "!"
    },
    "·–·–·–": {
      "value": "."
    },
    "-····-": {
      "value": "-"
    },
    "·-·-·": {
      "value": "+"
    },
    "·-··-·": {
      "value": "\""
    },
    "··--··": {
      "value": "?"
    },
    "-··-·": {
      "value": "/"
    },
    "       ": {
      "value": " "
    }
};

let spaceBetweenChars = "   ";//3
let spaceBetweenWords = "       ";//7

function morseToText(str = ""){
  str = str || document.getElementById("outputMorse").value;
  let text = "";
  str = str.replace(/ /g,"S");
  str = str.replace(/S{7}/g," ");
  str = str.replace(/S{3}/g,"|");
  let char = "";
  for(let i=0;i<str.length;i++){
      if(str[i] == "|"){
          text = text + textJSON[char].value;
          char = "";
      } else if(str[i] == " "){
          text = text + textJSON[char].value + " ";
          char = "";
      } else {
          char = char + str[i];
          if((i+1)==str.length){
            if(textJSON[char]){
              text = text + textJSON[char].value;
            }else {
              return console.log("Wrong Input!");
            }
          } 
      }
  }
  let inputTextNode = document.getElementById("inputText");
  if(inputTextNode) inputTextNode.value = text;
  return text;
}