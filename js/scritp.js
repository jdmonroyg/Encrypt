//   [^a-zA-Z0-9]/g indica que la expresion regular busca los caracteres distintos a los ingresados, donde /g busca todas las coincidencias de la cadena. 
//   ^[a-zA-Z0-9]+$ aca la expresion regular busca los caracteres descritos.

function sanitizeText (text){
    let regex= /[^a-zA-Z0-9\s,.]/g;
    return text.replace(regex,"");
}

function encrypt(){
    
    let message=document.getElementById("textArea");
    message=sanitizeText(message.value.toLowerCase());
    if (message){
        hiddenElements();
    }
    const result = document.getElementById("resultTextArea");
    result.innerHTML = message.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(){
    let message=document.getElementById("textArea");
    message=sanitizeText(message.value.toLowerCase());
    if (message){
        hiddenElements();
    }
    
    const result = document.getElementById("resultTextArea");
    result.innerHTML = message.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copy(){
    let copyTextArea= document.getElementById("resultTextArea");
    navigator.clipboard.writeText(copyTextArea.value);
}

function hiddenElements(){
    let hiddenDoll=document.getElementById("resultTextArea");
    let hiddenTexts=document.getElementsByClassName("textAreaElements");
    let hiddenButtonCopy=document.getElementById("buttonCopy");
    hiddenDoll.style.backgroundImage="none"
    hiddenTexts[0].style.display="none";
    hiddenButtonCopy.style.display="block"
}
let buttonEncrypt= document.getElementById("buttonEncrypt");
buttonEncrypt.addEventListener("click",encrypt);


let buttonDecrypt= document.getElementById("buttonDecrypt");
buttonDecrypt.addEventListener("click", decrypt);

let buttonCopy= document.getElementById("buttonCopy");
buttonCopy.addEventListener("click", copy);
    
