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
    // le mie sette variabili dove salvo i risultati relativi al calcolo della percentuale di ogni fase della lavorazione per le mie ore iniziali
    var result_1;
    var result_2;
    var result_3;
    var result_4;
    var result_5;
    var result_6;
    var result_7;
    // adesso calcolo il risultato delle percentuali e li mostro direttamente all'utente 
    var result_1_ll = document.getElementById("result_1_ll").innerHTML = (work_hours * lavorazione_1) / 100;
 /*   var result_2 = document.getElementById("result_1").innerHTML = (work_hours * lavorazione_2) / 100;
    var result_3 = document.getElementById("result_1").innerHTML = (work_hours * lavorazione_3) / 100;
    var result_4 = (work_hours * lavorazione_4) / 100;
    var result_5 = (work_hours * lavorazione_5) / 100;
    var result_6 = (work_hours * lavorazione_6) / 100;
    var result_7 = (work_hours * lavorazione_7) / 100;

*/




}