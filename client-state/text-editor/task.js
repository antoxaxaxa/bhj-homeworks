document.addEventListener("DOMContentLoaded", function () {
    let editor = document.getElementById("editor");
    let button = document.getElementById("send");

    let buttonCheck = false;

    editor.addEventListener("input",function (){
        localStorage.setItem('editorText',editor.value);
    });

    button.addEventListener("click",function (){
        buttonCheck = true;
        editor.value = "";
        localStorage.removeItem('editorText');
    });

    if(!buttonCheck){
        const savedText = localStorage.getItem('editorText');
        editor.value = savedText;
    }

});
