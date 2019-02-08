var work_hours; // la variabile che uso per prendere in input le mie ore macchina



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
/*
function sum_num1_plus_10(work_hours){
    work_hours = parseInt(document.getElementById("input_num").value);
    var num2 = 10;
    var result = work_hours + num2;
    alert(result);
}
*/
function lavorazione_lenti(work_hours)
{
    work_hours = parseInt(document.getElementById("input_num").value);
    // creo le variabili che determinano le temmpistiche per ogni fase di lavorazione
    var lavorazione_1 = 8;
    var lavorazione_2 = 2;
    var lavorazione_3 = 6;
    var lavorazione_4 = 37;
    var lavorazione_5 = 22;
    var lavorazione_6 = 15;
    var lavorazione_7 = 10;
    var result_1;
    var result_2;
    var result_3;
    var result_4;
    var result_5;
    var result_6;
    var result_7;
    // adesso calcolo il risultato delle percentuali 
    var result_1 = (work_hours * lavorazione_1) / 100;
    var result_2 = (work_hours * lavorazione_1) / 100;
    var result_3 = (work_hours * lavorazione_1) / 100;
    var result_4 = (work_hours * lavorazione_1) / 100;
    var result_5 = (work_hours * lavorazione_1) / 100;
    var result_6 = (work_hours * lavorazione_1) / 100;
    var result_7 = (work_hours * lavorazione_1) / 100;
    // mostro i risultati 
    alert(result_1);








}