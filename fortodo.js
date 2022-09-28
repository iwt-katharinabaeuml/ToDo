// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI"); // macht alle <LI> zu einer Collection; Groß und Kleinschreibung scheinbar irrelevant
console.log(myNodelist)
let i; // Laufindex
for (i = 0; i < myNodelist.length; i++) { //einmal durch myNodelist
    let span = document.createElement("SPAN");
    console.log(span)
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
        sessionStorage.removeItem(div)
    };
}
document.getElementById("eingabe").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

//Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//     "click",
//     function (ev) {
//         if (ev.target.tagName === "LI") {
//             ev.target.classList.toggle('checked');
//         }
//     false})


let counter = 0;

function newElement() {
    let li = document.createElement("li"); // neues Element in der Liste erzeugen heißt jetzt var li
    let inputValue = document.getElementById("eingabe").value; // Eingegebenes im Eingabefeld heißt jtzt inputValue
    // let incr = incr++;
    // console.log(incr)
    // console.log(inputValue);

    let t = document.createTextNode(inputValue); // Eingegbenes im Textfeld wird neuer Text
    li.appendChild(t); // neuer Text(eingegeben im Einhabefeld) wird in vorhandene Liste aufgenommen

    if (inputValue === '') {
        alert("no input"); // falls nicht eingegeben wurde, erscheint Pop-Up mit text "no input"
    } else {
        document.getElementById("myUl").appendChild(li).setAttribute("id", counter.toString())
        sessionStorage.setItem(counter.toString(), inputValue)
        counter++;
        // wurde etwas eingegeben, bekommt die Liste "myUL" ein neues <li> mit dem Inhalt des Eingabefeldes
    }
    document.getElementById("eingabe").value = ""; // Das Eingabefeld wird wieder leer gemacht für neue Eingabe


    let span = document.createElement("SPAN"); // neuer Span mit dem Namen span
    let txt = document.createTextNode("\u00D7"); // neuer Text, mit dem Namen txt
    span.className = "close"; // der Span bekommt Class "close"
    span.appendChild(txt); // span bekommt einen Inhalt, den Text   WIE KANN ICH MIR DAS VORSTELLEN?!
    li.appendChild(span); // das li bekommt den neuen Inhalt span <li><span class = "close"></span></li>?
    console.log(span) //<span class="close">x</span>
    console.log(li)
    for (i = 0; i < close.length; i++) { //geht alle Elemente von  span "close" durch
        console.error(i);
        console.log("test", i)
        close[i].onclick = function () { // wird 
            console.log(i)
            let div = this.parentNode; // auch .parentNode verwendbar
            div.style.display = "none";
            let currentElement = div.outerHTML.split(/(id="\d+")/gm)[1].split(/(\d+)/gm)[1]
            console.log("test2", currentElement)
            sessionStorage.removeItem(currentElement)
            // sessionStorage.removeItem("xc")
        };
    }
}

//TODO: add undo delete function


// sessionStorage.setItem("TempSaveStorage","wow")
// console.log(sessionStorage.getItem("TempSaveStorage"))