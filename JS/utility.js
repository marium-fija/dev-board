
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue);
    return textNumber;
} 