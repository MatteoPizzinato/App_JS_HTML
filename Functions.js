/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours; // la variabile che uso per prendere in input le mie ore macchina

/*
FINE SEZIONE PER LE VARIABILI GLOBALI
*/

// funzione che mostra o nasconde un div che permette di inserire i dati per il calcolo delle ore di una determinata lavorazione
function show_hide_hours_input() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("Hours_Input");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// funzione che prende in input un dato immesso dall'utente 
function create_input_hours()  // funzione che permette di scrivere dentro una casella ----> salvare i dati in varibaili ???
{    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "work_hours");
    document.body.appendChild(x);
    alert(work_hours);
}

function lavorazione_lenti()
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

    // adesso calcolo il risultato delle percentuali e li mostro direttamente all'utente 
    // in JS le varibili non servono esattamente, nel senso che per visualizzare in questo caso il risultato non serve avere una variabile e 
    // poi far visualizzare quella ma basta fare il calcolo direttamente nel processo di visualizzazione del risultato. I vantaggi è che 
    // così ho dei programmi più "leggeri" perchè hanno meno variabili
    var result_1_ll = document.getElementById("result_1_ll").innerHTML = (work_hours * lavorazione_1) / 100; 
    document.getElementById("result_2_ll").innerHTML = (work_hours * lavorazione_2) / 100;
    document.getElementById("result_3_ll").innerHTML = (work_hours * lavorazione_3) / 100;
    document.getElementById("result_4_ll").innerHTML = (work_hours * lavorazione_4) / 100;
    document.getElementById("result_5_ll").innerHTML = (work_hours * lavorazione_5) / 100;
    document.getElementById("result_6_ll").innerHTML = (work_hours * lavorazione_6) / 100;
    document.getElementById("result_7_ll").innerHTML = (work_hours * lavorazione_7) / 100;
/*
    MEGLIO USARE DELLE VARIBILI ALLOCATE IN MEMORIA, PERCHE' MI SERVIRANNO PER SETTARE LE PPERCENTUALI POI, QUINDI...
*/
    alert(result_1_ll);
}