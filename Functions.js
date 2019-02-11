
/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours; // la variabile che uso per prendere in input le mie ore macchina e salvarle 

/* VARIBILI CONTENUTE IN lavorazioni_lenti */
/* Variabili relative alle fasi di lavorazione della funzione lavorazion_lenti */
var lavorazione_1 = 8;
var lavorazione_2 = 2;
var lavorazione_3 = 6;
var lavorazione_4 = 37;
var lavorazione_5 = 22;
var lavorazione_6 = 15;
var lavorazione_7 = 10;
/* FINE VARIABILI CONTENUTE IN lavorazione_lenti */


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
// funzione che mi calcola le tempistiche in base alle percentuali dei passaggi per le lavorazioni lenti
function lavorazione_lenti()
{
    work_hours = parseInt(document.getElementById("input_num").value); // qui il mio input viene parsato in una variabile di tipo INT

    // adesso calcolo il risultato delle percentuali e le mostro direttamente all'utente 
    // in JS le varibili non servono esattamente, nel senso che per visualizzare in questo caso il risultato non serve avere una variabile e 
    // poi far visualizzare quella ma basta fare il calcolo direttamente nel processo di visualizzazione del risultato. I vantaggi è che 
    // così ho dei programmi più "leggeri" perchè hanno meno variabili
/*
    MEGLIO USARE DELLE VARIBILI ALLOCATE IN MEMORIA, PERCHE' MI SERVIRANNO PER SETTARE LE PPERCENTUALI POI, QUINDI...
*/
    var result_1_ll = document.getElementById("result_1_ll").innerHTML = "Le ore relative alla prima fase sono: " + (work_hours * lavorazione_1) / 100; 
    var result_2_ll = document.getElementById("result_2_ll").innerHTML = "Le ore relative alla seconda fase sono: " + (work_hours * lavorazione_2) / 100;
    var result_3_ll = document.getElementById("result_3_ll").innerHTML = "Le ore relative alla terza fase sono: " + (work_hours * lavorazione_3) / 100;
    var result_4_ll = document.getElementById("result_4_ll").innerHTML = "Le ore relative alla quarta fase sono: " + (work_hours * lavorazione_4) / 100;
    var result_5_ll = document.getElementById("result_5_ll").innerHTML = "Le ore relative alla quinta fase sono: " + (work_hours * lavorazione_5) / 100;
    var result_6_ll = document.getElementById("result_6_ll").innerHTML = "Le ore relative alla sesta fase sono: " + (work_hours * lavorazione_6) / 100;
    var result_7_ll = document.getElementById("result_7_ll").innerHTML = "Le ore relative alla settima fase sono: " + (work_hours * lavorazione_7) / 100;
}
// funzione che mi permette di settare le percentuali e quindi le ore di ogni lavorazione
function setting_percentuali()
{
    // alert(lavorazione_1);
    // lavorazione_1 = parseInt(document.getElementById("lavorazione_1").value);
    document.getElementById("lavorazione_1").innerHTML = "La percentuale relativa alla prima fase e'  " + lavorazione_1 + "%";
    
}


 