function show_hide_hours_input() { // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
                                   // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("Hours_Input");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function create_input_hours() {  // funzione che permette di scrivere dentro una casella ----> salvare i dati in varibaili ???
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "ciao");
    document.body.appendChild(x);
}
function othername() {
 //   var work_hours = document.getElementById("userInput").value;
    alert(work_hours);
}



function sum_num1_plus_10(work_hours){
    var work_hours;
    work_hours = parseInt(document.getElementById("input_num").value);
    var num2 = 10;
    var result = work_hours + num2;
    alert(result);
}