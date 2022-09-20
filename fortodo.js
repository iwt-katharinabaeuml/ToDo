function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Eingabefeld").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t)
        if (inputValue ===''){
            alert (")")
        }
        else{document.getElementById("myUL").aprrendChild(li)}
        document.getElementById("Eimgabefeld").value="";
    }