//   [^a-zA-Z0-9]/g indica que la expresion regular busca los caracteres distintos a los ingresados, donde /g busca todas las coincidencias de la cadena. 
//   ^[a-zA-Z0-9]+$ aca la expresion regular busca los caracteres descritos.
const resultText=document.getElementById("resultTextArea");

function validateText (text){
    let regexSpecialCharacters= /[^a-z0-9\s,.]/;
    let regexCapitalLetter= /[A-Z]/;
    return regexSpecialCharacters.test(text) || regexCapitalLetter.test(text);
}

function crypt(){
    let message=document.getElementById("textArea").value;
    if (validateText(message)){
        alert("Only lowercase letters and no accent");
        location.reload();
        return "";
    }
    if (message){
        hiddenElements();
    }
    
    return message;
}

function encrypt(){
    let message = crypt();
    resultText.innerHTML = message.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(){
    let message = crypt();
    resultText.innerHTML = message.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copy(){
    let copyTextArea= resultText;
    navigator.clipboard.writeText(copyTextArea.value);
    
    let customAlert = document.getElementById("customAlert");
    let customAlertMessage = document.getElementById("customAlertMessage");
    customAlertMessage.textContent = "The text was copied";
    customAlert.classList.remove("hidden");

    setTimeout(function() {
        customAlert.classList.add("hidden");
    },1500);
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
    
