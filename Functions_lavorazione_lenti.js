
/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours; // la variabile che uso per prendere in input le mie ore macchina e salvarle 

/* VARIBILI CONTENUTE IN lavorazioni_lenti */
/* Variabili relative alle fasi di lavorazione della funzione lavorazion_lenti */
var lavorazione_1_ll = 8;
var lavorazione_2_ll = 2;
var lavorazione_3_ll = 6;
var lavorazione_4_ll = 37;
var lavorazione_5_ll = 22;
var lavorazione_6_ll = 15;
var lavorazione_7_ll = 10;
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
};
// funzione che mi calcola le tempistiche in base alle percentuali dei passaggi per le lavorazioni lenti
function lavorazione_lenti()
{
    work_hours = parseFloat(document.getElementById("input_num").value); // qui il mio input viene parsato in una variabile di tipo INT

    // adesso calcolo il risultato delle percentuali e le mostro direttamente all'utente 
    // in JS le varibili non servono esattamente, nel senso che per visualizzare in questo caso il risultato non serve avere una variabile e 
    // poi far visualizzare quella ma basta fare il calcolo direttamente nel processo di visualizzazione del risultato. I vantaggi è che 
    // così ho dei programmi più "leggeri" perchè hanno meno variabili
/*
    MEGLIO USARE DELLE VARIBILI ALLOCATE IN MEMORIA, PERCHE' MI SERVIRANNO PER SETTARE LE PPERCENTUALI POI, QUINDI...
*/
    var result_1_ll = document.getElementById("result_1_ll").innerHTML = "Le ore relative alla prima fase sono: " + (work_hours * lavorazione_1_ll) / 100 + " ore";    
    var result_2_ll = document.getElementById("result_2_ll").innerHTML = "Le ore relative alla seconda fase sono: " + (work_hours * lavorazione_2_ll) / 100 + " ore";
    var result_3_ll = document.getElementById("result_3_ll").innerHTML = "Le ore relative alla terza fase sono: " + (work_hours * lavorazione_3_ll) / 100 + " ore";
    var result_4_ll = document.getElementById("result_4_ll").innerHTML = "Le ore relative alla quarta fase sono: " + (work_hours * lavorazione_4_ll) / 100 + " ore";
    var result_5_ll = document.getElementById("result_5_ll").innerHTML = "Le ore relative alla quinta fase sono: " + (work_hours * lavorazione_5_ll) / 100 + " ore";
    var result_6_ll = document.getElementById("result_6_ll").innerHTML = "Le ore relative alla sesta fase sono: " + (work_hours * lavorazione_6_ll) / 100 + " ore";
    var result_7_ll = document.getElementById("result_7_ll").innerHTML = "Le ore relative alla settima fase sono: " + (work_hours * lavorazione_7_ll) / 100 + " ore";
};
/* funzione che mostra i valori di default delle lavorazioni */
function show_setting_values() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("sh_s_v");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
function show_default_values()
{
    // visualizzo i dati standard relativi alle fasi della lavorazione
    // alert(lavorazione_1);
    // lavorazione_1 = parseFloat(document.getElementById("lavorazione_1").value);
    document.getElementById("lavorazione_1_ll").innerHTML = "La percentuale relativa alla prima fase e'  " + lavorazione_1_ll + "%";
    document.getElementById("lavorazione_2_ll").innerHTML = "La percentuale relativa alla seconda fase e'  " + lavorazione_2_ll + "%";
    document.getElementById("lavorazione_3_ll").innerHTML = "La percentuale relativa alla terza fase e'  " + lavorazione_3_ll + "%";
    document.getElementById("lavorazione_4_ll").innerHTML = "La percentuale relativa alla quarta fase e'  " + lavorazione_4_ll + "%";
    document.getElementById("lavorazione_5_ll").innerHTML = "La percentuale relativa alla quinta fase e'  " + lavorazione_5_ll + "%";
    document.getElementById("lavorazione_6_ll").innerHTML = "La percentuale relativa alla sesta fase e'  " + lavorazione_6_ll + "%";
    document.getElementById("lavorazione_7_ll").innerHTML = "La percentuale relativa alla settima fase e'  " + lavorazione_7_ll + "%";

};
// adesso setto le percentuali di ogni fase della lavorazione
function setting_percentuali(work_hours = parseFloat(document.getElementById("input_num").value))  /* gli passo quello che avevo scritto nella 
                                                                                                    casella di input ore all'inizio */
{
// LAVORAZIONE 1
    var new_lavorazione_1_ll = parseFloat(document.getElementById("input_new_lavorazione_1_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_ll = (work_hours * new_lavorazione_1_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_1_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_1_ll + "%";
    document.getElementById("new_result_1_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_1_ll + " ore";
// LAVORAZIONE 2 
    var new_lavorazione_2_ll = parseFloat(document.getElementById("input_new_lavorazione_2_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_ll = (work_hours * new_lavorazione_2_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_2_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_2_ll + "%";
    document.getElementById("new_result_2_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_2_ll + " ore";
};