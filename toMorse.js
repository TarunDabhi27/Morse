const morseJSON = {
    "a": {
        "withSpace": "· –",
        "withoutSpace": "·–",
    },
    "b": {
        "withSpace": "– · · ·",
        "withoutSpace": "–···",
    },
    "c": {
        "withSpace": "– · – ·",
        "withoutSpace": "–·–·",
    },
    "d": {
        "withSpace": "– · ·",
        "withoutSpace": "–··",
    },
    "e": {
        "withSpace": "·",
        "withoutSpace": "·",
    },
    "f": {
        "withSpace": "· · – ·",
        "withoutSpace": "··–·",
    },
    "g": {
        "withSpace": "– – ·",
        "withoutSpace": "––·",
    },
    "h": {
        "withSpace": "· · · ·",
        "withoutSpace": "····",
    },
    "i": {
        "withSpace": "· ·",
        "withoutSpace": "··",
    },
    "j": {
        "withSpace": "· – – –",
        "withoutSpace": "·–––",
    },
    "k": {
        "withSpace": "– · –",
        "withoutSpace": "–·–",
    },
    "l": {
        "withSpace": "· – · ·",
        "withoutSpace": "·–··",
    },
    "m": {
        "withSpace": "– –",
        "withoutSpace": "––",
    },
    "n": {
        "withSpace": "– ·",
        "withoutSpace": "–·",
    },
    "o": {
        "withSpace": "– – –",
        "withoutSpace": "–––",
    },
    "p": {
        "withSpace": "· – – ·",
        "withoutSpace": "·––·",
    },
    "q": {
        "withSpace": "– – · –",
        "withoutSpace": "––·–",
    },
    "r": {
        "withSpace": "· – ·",
        "withoutSpace": "·–·",
    },
    "s": {
        "withSpace": "· · ·",
        "withoutSpace": "···",
    },
    "t": {
        "withSpace": "–",
        "withoutSpace": "–",
    },
    "u": {
        "withSpace": "· · –",
        "withoutSpace": "··–",
    },
    "v": {
        "withSpace": "· · · –",
        "withoutSpace": "···–",
    },
    "w": {
        "withSpace": "· – –",
        "withoutSpace": "·––",
    },
    "x": {
        "withSpace": "– · · –",
        "withoutSpace": "–··–",
    },
    "y": {
        "withSpace": "– · – –",
        "withoutSpace": "–·––",
    },
    "z": {
        "withSpace": "– – · ·",
        "withoutSpace": "––··",
    },
    "1": {
        "withSpace": "· – – – –",
        "withoutSpace": "·––––",
    },
    "2": {
        "withSpace": "· · – – –",
        "withoutSpace": "··–––",
    },
    "3": {
        "withSpace": "· · · – –",
        "withoutSpace": "···––",
    },
    "4": {
        "withSpace": "· · · · –",
        "withoutSpace": "····–",
    },
    "5": {
        "withSpace": "· · · · ·",
        "withoutSpace": "·····",
    },
    "6": {
        "withSpace": "– · · · ·",
        "withoutSpace": "–····",
    },
    "7": {
        "withSpace": "– – · · ·",
        "withoutSpace": "––···",
    },
    "8": {
        "withSpace": "– – – · ·",
        "withoutSpace": "–––··",
    },
    "9": {
        "withSpace": "– – – – ·",
        "withoutSpace": "––––·",
    },
    "0": {
        "withSpace": "– – – – –",
        "withoutSpace": "–––––",
    },
    "&": {
        "withSpace": "· - · · ·",
        "withoutSpace": "·-···",
    },
    "'": {
        "withSpace": "· - - - - ·",
        "withoutSpace": "·----·",
    },
    "@": {
        "withSpace": "· - - · - ·",
        "withoutSpace": "·--·-·",
    },
    ")": {
        "withSpace": "- · - - · -",
        "withoutSpace": "-·--·-",
    },
    "(": {
        "withSpace": "- · - - ·",
        "withoutSpace": "-·--·",
    },
    ":": {
        "withSpace": "- - - · · ·",
        "withoutSpace": "---···",
    },
    ",": {
        "withSpace": "- - · · - -",
        "withoutSpace": "--··--",
    },
    "=": {
        "withSpace": "- · · · -",
        "withoutSpace": "-···-",
    },
    "!": {
        "withSpace": "- · - · - -",
        "withoutSpace": "-·-·--",
    },
    ".": {
        "withSpace": "· – · – · –",
        "withoutSpace": "·–·–·–",
    },
    "-": {
        "withSpace": "- · · · · -",
        "withoutSpace": "-····-",
    },
    "+": {
        "withSpace": "· - · - ·",
        "withoutSpace": "·-·-·",
    },
    "\"": {
        "withSpace": "· - · · - ·",
        "withoutSpace": "·-··-·",
    },
    "?": {
        "withSpace": "· · - - · ·",
        "withoutSpace": "··--··",
    },
    "/": {
        "withSpace": "- · · - ·",
        "withoutSpace": "-··-·",
    },
    " ": {
        "withSpace": "       ",
        "withoutSpace": "       ",
    },
  
};

function textToMorse(str = ""){
    
    str = str || document.getElementById("inputText").value;
    let morse = "";
    let fourSpace = "    ";
    str = str.replace(/ {2,}/g, " ");//Replaces multiple spaces with single one
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char == " "){
            morse = morse + fourSpace;
        } else if(morseJSON[char]){
            morse = morse + morseJSON[char].withoutSpace + spaceBetweenChars;
        }else {
            return console.log("Wrong Input!");
        }
    }
    morse = morse.trim();
    let outputMorseNode = document.getElementById("outputMorse");
    if(outputMorseNode) outputMorseNode.value = morse;
    return morse;
}