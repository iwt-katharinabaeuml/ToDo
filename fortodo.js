// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); // macht alle <LI> zu einer Collection; Groß und Kleinschreibung scheinbar irrelevant
console.log(myNodelist)
var i; // Laufindex
for (i = 0; i < myNodelist.length; i++) { //einmal durch myNodelist
    var span = document.createElement("SPAN");
    console.log(span)
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

function newElement() {
    var li = document.createElement("li"); // neues Element in der Liste erzeugen heißt jetzt var li 
    var inputValue = document.getElementById("Eingabefeld").value; // Eingegebenes im Eingabefeld heißt jtzt inputValue
    var t = document.createTextNode(inputValue); // Eingegbenes im Textfeld wird neuer Text
    li.appendChild(t); // neuer Text(eingegeben im Einhabefeld) wird in vorhandene Liste aufgenommen
    if (inputValue === "") {
        alert("no input"); // falls nicht eingegeben wurde, erscheint Pop-Up mit text "no input"
    } else {
        document.getElementById("myUL").aprrendChild(li); // wurde etwas eingegeben, bekommt die Liste "myUL" ein neues <li> mit dem Inhalt des Eingabefeldes
    }
    document.getElementById("Eingabefeld").value = ""; // Das Eingabefeld wird wieder leer gemacht für neue Eingabe

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
