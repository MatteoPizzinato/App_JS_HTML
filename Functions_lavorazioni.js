
/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours_ll; // la variabile che uso per prendere in input le mie ore macchina e salvarle 

/* VARIBILI CONTENUTE IN lavorazioni_lenti */
/* Variabili relative alle fasi di lavorazione della funzione lavorazion_lenti */
var lavorazione_1_ll = 8;
var lavorazione_2_ll = 2;
var lavorazione_3_ll = 6;
var lavorazione_4_ll = 37;
var lavorazione_5_ll = 22;
var lavorazione_6_ll = 15;
var lavorazione_7_ll = 10;
/* FINE VARIABILI CONTENUTE IN lavorazione_ferro */

/*
FINE SEZIONE PER LE VARIABILI GLOBALI
*/

// funzione che mostra o nasconde un div che permette di inserire i dati per il calcolo delle ore di una determinata lavorazione
function show_hide_hours_input() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("Hours_Input_ll");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
// funzione che mi calcola le tempistiche in base alle percentuali dei passaggi per le lavorazioni lenti
function lavorazione_lenti()
{
    work_hours = parseFloat(document.getElementById("input_num").value); // qui prende il mio input e viene parsato in una variabile di tipo INT

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
    document.getElementById("lavorazione_1_ll").innerHTML = "La percentuale relativa alla prima fase e'  " + lavorazione_1_ll + "%";
    document.getElementById("lavorazione_2_ll").innerHTML = "La percentuale relativa alla seconda fase e'  " + lavorazione_2_ll + "%";
    document.getElementById("lavorazione_3_ll").innerHTML = "La percentuale relativa alla terza fase e'  " + lavorazione_3_ll + "%";
    document.getElementById("lavorazione_4_ll").innerHTML = "La percentuale relativa alla quarta fase e'  " + lavorazione_4_ll + "%";
    document.getElementById("lavorazione_5_ll").innerHTML = "La percentuale relativa alla quinta fase e'  " + lavorazione_5_ll + "%";
    document.getElementById("lavorazione_6_ll").innerHTML = "La percentuale relativa alla sesta fase e'  " + lavorazione_6_ll + "%";
    document.getElementById("lavorazione_7_ll").innerHTML = "La percentuale relativa alla settima fase e'  " + lavorazione_7_ll + "%";

};
// adesso setto le percentuali di ogni fase della lavorazione, avrò 7 funzioni in totale, una per ogni fase della lavorazione
// prima fase
function setting_percentuali_1_fase(work_hours = parseFloat(document.getElementById("input_num").value))  /* gli passo quello che avevo scritto nella 
                                                                                                             casella di input ore all'inizio */
{
    var new_lavorazione_1_ll = parseFloat(document.getElementById("input_new_lavorazione_1_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_ll = (work_hours * new_lavorazione_1_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_1_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_1_ll + "%";
    document.getElementById("new_result_1_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_1_ll + " ore";
};
// seconda fase
function setting_percentuali_2_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_2_ll = parseFloat(document.getElementById("input_new_lavorazione_2_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_ll = (work_hours * new_lavorazione_2_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_2_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_2_ll + "%";
    document.getElementById("new_result_2_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_2_ll + " ore";
};
// terza fase
function setting_percentuali_3_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_3_ll = parseFloat(document.getElementById("input_new_lavorazione_3_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_3_ll = (work_hours * new_lavorazione_3_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_3_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_3_ll + "%";
    document.getElementById("new_result_3_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_3_ll + " ore";
};
// quarta fase
function setting_percentuali_4_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_4_ll = parseFloat(document.getElementById("input_new_lavorazione_4_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_4_ll = (work_hours * new_lavorazione_4_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_4_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_4_ll + "%";
    document.getElementById("new_result_4_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_4_ll + " ore";
};
// quinta fase
function setting_percentuali_5_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_5_ll = parseFloat(document.getElementById("input_new_lavorazione_5_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_5_ll = (work_hours * new_lavorazione_5_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_5_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_5_ll + "%";
    document.getElementById("new_result_5_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_5_ll + " ore";
};
// sesta fase
function setting_percentuali_6_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_6_ll = parseFloat(document.getElementById("input_new_lavorazione_6_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_6_ll = (work_hours * new_lavorazione_6_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_6_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_6_ll + "%";
    document.getElementById("new_result_6_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_6_ll + " ore";
};
// settima fase
function setting_percentuali_7_fase(work_hours = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_7_ll = parseFloat(document.getElementById("input_new_lavorazione_7_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_7_ll = (work_hours * new_lavorazione_7_ll) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_7_ll").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_7_ll + "%";
    document.getElementById("new_result_7_ll").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_7_ll + " ore";
};

/*

LAVORAZIONE FERRO LAVORAZIONE FERRO LAVORAZIONE FERRO
LAVORAZIONE FERRO LAVORAZIONE FERRO LAVORAZIONE FERRO
LAVORAZIONE FERRO LAVORAZIONE FERRO LAVORAZIONE FERRO

*/

/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours_lf; // la variabile che uso per prendere in input le mie ore macchina e salvarle 

/* VARIBILI CONTENUTE IN lavorazioni_ferro */
/* Variabili relative alle fasi di lavorazione della funzione lavorazion_ferro */
var lavorazione_1_lf = 5;
var lavorazione_2_lf = 7;
var lavorazione_3_lf = 12;
var lavorazione_4_lf = 27;
var lavorazione_5_lf = 29;
var lavorazione_6_lf = 15;
var lavorazione_7_lf = 5;
/* FINE VARIABILI CONTENUTE IN lavorazione_ferro */


/*
FINE SEZIONE PER LE VARIABILI GLOBALI
*/

// funzione che mostra o nasconde un div che permette di inserire i dati per il calcolo delle ore di una determinata lavorazione
function show_hide_hours_input_lf() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("Hours_Input_lf");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
// funzione che mi calcola le tempistiche in base alle percentuali dei passaggi per le lavorazioni lenti
function lavorazione_ferro()
{
    work_hours_lf = parseFloat(document.getElementById("input_num_lf").value); // qui prende il mio input e viene parsato in una variabile di tipo INT

    // adesso calcolo il risultato delle percentuali e le mostro direttamente all'utente 
    // in JS le varibili non servono esattamente, nel senso che per visualizzare in questo caso il risultato non serve avere una variabile e 
    // poi far visualizzare quella ma basta fare il calcolo direttamente nel processo di visualizzazione del risultato. I vantaggi è che 
    // così ho dei programmi più "leggeri" perchè hanno meno variabili
/*
    MEGLIO USARE DELLE VARIBILI ALLOCATE IN MEMORIA, PERCHE' MI SERVIRANNO PER SETTARE LE PPERCENTUALI POI, QUINDI...
*/
    var result_1_lf = document.getElementById("result_1_lf").innerHTML = "Le ore relative alla prima fase sono: " + (work_hours_lf * lavorazione_1_lf) / 100 + " ore";    
    var result_2_lf = document.getElementById("result_2_lf").innerHTML = "Le ore relative alla seconda fase sono: " + (work_hours_lf * lavorazione_2_lf) / 100 + " ore";
    var result_3_lf = document.getElementById("result_3_lf").innerHTML = "Le ore relative alla terza fase sono: " + (work_hours_lf * lavorazione_3_lf) / 100 + " ore";
    var result_4_lf = document.getElementById("result_4_lf").innerHTML = "Le ore relative alla quarta fase sono: " + (work_hours_lf * lavorazione_4_lf) / 100 + " ore";
    var result_5_lf = document.getElementById("result_5_lf").innerHTML = "Le ore relative alla quinta fase sono: " + (work_hours_lf * lavorazione_5_lf) / 100 + " ore";
    var result_6_lf = document.getElementById("result_6_lf").innerHTML = "Le ore relative alla sesta fase sono: " + (work_hours_lf * lavorazione_6_lf) / 100 + " ore";
    var result_7_lf = document.getElementById("result_7_lf").innerHTML = "Le ore relative alla settima fase sono: " + (work_hours_lf * lavorazione_7_lf) / 100 + " ore";
};

/* funzione che mostra i valori di default delle lavorazioni */
function show_setting_values_lf() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("sh_s_v_lf");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
function show_default_values_lf()
{
    // visualizzo i dati standard relativi alle fasi della lavorazione
    document.getElementById("lavorazione_1_lf").innerHTML = "La percentuale relativa alla prima fase e'  " + lavorazione_1_lf + "%";
    document.getElementById("lavorazione_2_lf").innerHTML = "La percentuale relativa alla seconda fase e'  " + lavorazione_2_lf + "%";
    document.getElementById("lavorazione_3_lf").innerHTML = "La percentuale relativa alla terza fase e'  " + lavorazione_3_lf + "%";
    document.getElementById("lavorazione_4_lf").innerHTML = "La percentuale relativa alla quarta fase e'  " + lavorazione_4_lf + "%";
    document.getElementById("lavorazione_5_lf").innerHTML = "La percentuale relativa alla quinta fase e'  " + lavorazione_5_lf + "%";
    document.getElementById("lavorazione_6_lf").innerHTML = "La percentuale relativa alla sesta fase e'  " + lavorazione_6_lf + "%";
    document.getElementById("lavorazione_7_lf").innerHTML = "La percentuale relativa alla settima fase e'  " + lavorazione_7_lf + "%";

};
// adesso setto le percentuali di ogni fase della lavorazione, avrò 7 funzioni in totale, una per ogni fase della lavorazione
// prima fase
function setting_percentuali_1_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num_lf").value))  /* gli passo quello che avevo scritto nella 
                                                                                                                      casella di input ore all'inizio */
{
    var new_lavorazione_1_lf = parseFloat(document.getElementById("input_new_lavorazione_1_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_lf = (work_hours_lf * new_lavorazione_1_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_1_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_1_lf + "%";
    document.getElementById("new_result_1_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_1_lf + " ore";
};
// seconda fase
function setting_percentuali_2_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_2_lf = parseFloat(document.getElementById("input_new_lavorazione_2_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_lf = (work_hours_lf * new_lavorazione_2_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_2_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_2_lf + "%";
    document.getElementById("new_result_2_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_2_lf + " ore";
};
// terza fase
function setting_percentuali_3_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_3_lf = parseFloat(document.getElementById("input_new_lavorazione_3_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_3_lf = (work_hours_lf * new_lavorazione_3_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_3_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_3_lf + "%";
    document.getElementById("new_result_3_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_3_lf + " ore";
};
// quarta fase
function setting_percentuali_4_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_4_lf = parseFloat(document.getElementById("input_new_lavorazione_4_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_4_lf = (work_hours_lf * new_lavorazione_4_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_4_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_4_lf + "%";
    document.getElementById("new_result_4_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_4_lf + " ore";
};
// quinta fase
function setting_percentuali_5_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_5_lf = parseFloat(document.getElementById("input_new_lavorazione_5_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_5_lf = (work_hours_lf * new_lavorazione_5_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_5_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_5_lf + "%";
    document.getElementById("new_result_5_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_5_lf + " ore";
};
// sesta fase
function setting_percentuali_6_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_6_lf = parseFloat(document.getElementById("input_new_lavorazione_6_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_6_lf = (work_hours_lf * new_lavorazione_6_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_6_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_6_lf + "%";
    document.getElementById("new_result_6_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_6_lf + " ore";
};
// settima fase
function setting_percentuali_7_fase_lf(work_hours_lf = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_7_lf = parseFloat(document.getElementById("input_new_lavorazione_7_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_7_lf = (work_hours_lf * new_lavorazione_7_lf) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_7_lf").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_7_lf + "%";
    document.getElementById("new_result_7_lf").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_7_lf + " ore";
};


/*

LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA
LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA
LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA LAVORAZIONE PLASTICA

*/

/*
SEZIONE PER LE VARIABILI GLOBALI 
*/
var work_hours_lp; // la variabile che uso per prendere in input le mie ore macchina e salvarle 

/* VARIBILI CONTENUTE IN lavorazioni_ferro */
/* Variabili relative alle fasi di lavorazione della funzione lavorazion_ferro */
var lavorazione_1_lp = 5;
var lavorazione_2_lp = 7;
var lavorazione_3_lp = 12;
var lavorazione_4_lp = 27;
var lavorazione_5_lp = 29;
var lavorazione_6_lp = 15;
var lavorazione_7_lp = 5;
/* FINE VARIABILI CONTENUTE IN lavorazione_ferro */


/*
FINE SEZIONE PER LE VARIABILI GLOBALI
*/

// funzione che mostra o nasconde un div che permette di inserire i dati per il calcolo delle ore di una determinata lavorazione
function show_hide_hours_input_lp() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("Hours_Input_lp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
// funzione che mi calcola le tempistiche in base alle percentuali dei passaggi per le lavorazioni lenti
function lavorazione_ferro()
{
    work_hours_lp = parseFloat(document.getElementById("input_num_lp").value); // qui prende il mio input e viene parsato in una variabile di tipo INT

    // adesso calcolo il risultato delle percentuali e le mostro direttamente all'utente 
    // in JS le varibili non servono esattamente, nel senso che per visualizzare in questo caso il risultato non serve avere una variabile e 
    // poi far visualizzare quella ma basta fare il calcolo direttamente nel processo di visualizzazione del risultato. I vantaggi è che 
    // così ho dei programmi più "leggeri" perchè hanno meno variabili
/*
    MEGLIO USARE DELLE VARIBILI ALLOCATE IN MEMORIA, PERCHE' MI SERVIRANNO PER SETTARE LE PPERCENTUALI POI, QUINDI...
*/
    var result_1_lp = document.getElementById("result_1_lp").innerHTML = "Le ore relative alla prima fase sono: " + (work_hours_lp * lavorazione_1_lp) / 100 + " ore";    
    var result_2_lp = document.getElementById("result_2_lp").innerHTML = "Le ore relative alla seconda fase sono: " + (work_hours_lp * lavorazione_2_lp) / 100 + " ore";
    var result_3_lp = document.getElementById("result_3_lp").innerHTML = "Le ore relative alla terza fase sono: " + (work_hours_lp * lavorazione_3_lp) / 100 + " ore";
    var result_4_lp = document.getElementById("result_4_lp").innerHTML = "Le ore relative alla quarta fase sono: " + (work_hours_lp * lavorazione_4_lp) / 100 + " ore";
    var result_5_lp = document.getElementById("result_5_lp").innerHTML = "Le ore relative alla quinta fase sono: " + (work_hours_lp * lavorazione_5_lp) / 100 + " ore";
    var result_6_lp = document.getElementById("result_6_lp").innerHTML = "Le ore relative alla sesta fase sono: " + (work_hours_lp * lavorazione_6_lp) / 100 + " ore";
    var result_7_lp = document.getElementById("result_7_lp").innerHTML = "Le ore relative alla settima fase sono: " + (work_hours_lp * lavorazione_7_lp) / 100 + " ore";
};

/* funzione che mostra i valori di default delle lavorazioni */
function show_setting_values_lp() // funzione che permette la comparsa, cliccando un pulsante di far comparire la casella nella 
{                                // quale inserire il numero relativo alle ore di lavorazione
    var x = document.getElementById("sh_s_v_lp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
};
function show_default_values_lp()
{
    // visualizzo i dati standard relativi alle fasi della lavorazione
    document.getElementById("lavorazione_1_lp").innerHTML = "La percentuale relativa alla prima fase e'  " + lavorazione_1_lp + "%";
    document.getElementById("lavorazione_2_lp").innerHTML = "La percentuale relativa alla seconda fase e'  " + lavorazione_2_lp + "%";
    document.getElementById("lavorazione_3_lp").innerHTML = "La percentuale relativa alla terza fase e'  " + lavorazione_3_lp + "%";
    document.getElementById("lavorazione_4_lp").innerHTML = "La percentuale relativa alla quarta fase e'  " + lavorazione_4_lp + "%";
    document.getElementById("lavorazione_5_lp").innerHTML = "La percentuale relativa alla quinta fase e'  " + lavorazione_5_lp + "%";
    document.getElementById("lavorazione_6_lp").innerHTML = "La percentuale relativa alla sesta fase e'  " + lavorazione_6_lp + "%";
    document.getElementById("lavorazione_7_lp").innerHTML = "La percentuale relativa alla settima fase e'  " + lavorazione_7_lp + "%";

};
// adesso setto le percentuali di ogni fase della lavorazione, avrò 7 funzioni in totale, una per ogni fase della lavorazione
// prima fase
function setting_percentuali_1_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num_lp").value))  /* gli passo quello che avevo scritto nella 
                                                                                                                      casella di input ore all'inizio */
{
    var new_lavorazione_1_lp = parseFloat(document.getElementById("input_new_lavorazione_1_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_lp = (work_hours_lp * new_lavorazione_1_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_1_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_1_lp + "%";
    document.getElementById("new_result_1_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_1_lp + " ore";
};
// seconda fase
function setting_percentuali_2_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_2_lp = parseFloat(document.getElementById("input_new_lavorazione_2_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_lp = (work_hours_lp * new_lavorazione_2_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_2_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_2_lp + "%";
    document.getElementById("new_result_2_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_2_lp + " ore";
};
// terza fase
function setting_percentuali_3_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_3_lp = parseFloat(document.getElementById("input_new_lavorazione_3_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_3_lp = (work_hours_lp * new_lavorazione_3_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_3_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_3_lp + "%";
    document.getElementById("new_result_3_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_3_lp + " ore";
};
// quarta fase
function setting_percentuali_4_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_4_lp = parseFloat(document.getElementById("input_new_lavorazione_4_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_4_lp = (work_hours_lp * new_lavorazione_4_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_4_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_4_lp + "%";
    document.getElementById("new_result_4_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_4_lp + " ore";
};
// quinta fase
function setting_percentuali_5_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_5_lp = parseFloat(document.getElementById("input_new_lavorazione_5_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_5_lp = (work_hours_lp * new_lavorazione_5_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_5_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_5_lp + "%";
    document.getElementById("new_result_5_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_5_lp + " ore";
};
// sesta fase
function setting_percentuali_6_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_6_lp = parseFloat(document.getElementById("input_new_lavorazione_6_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_6_lp = (work_hours_lp * new_lavorazione_6_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_6_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_6_lp + "%";
    document.getElementById("new_result_6_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_6_lp + " ore";
};
// settima fase
function setting_percentuali_7_fase_lp(work_hours_lp = parseFloat(document.getElementById("input_num").value))
{
    var new_lavorazione_7_lp = parseFloat(document.getElementById("input_new_lavorazione_7_lp").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_7_lp = (work_hours_lp * new_lavorazione_7_lp) / 100; // creo una variabile per il nuovo risultato
    document.getElementById("new_lavorazione_7_lp").innerHTML = "La nuova percentuale relativa alla prima fase e'  " + new_lavorazione_7_lp + "%";
    document.getElementById("new_result_7_lp").innerHTML = "Le nuove ore relative alla prima fase sono: " + new_result_7_lp + " ore";
};


/*
    FUNZIONE PER FARE IL FOGLIO EXCEL
*/

function go(){


    /* Variabili che mi servono per calcolare e stampare i dati che mi servono */ 
    /* PRIMI RISULTATI E WORK HOURS */
    work_hours_ll = parseFloat(document.getElementById("input_num").value);
    var result_1_ll = (work_hours_ll * lavorazione_1_ll) / 100;
    var result_2_ll = (work_hours_ll * lavorazione_2_ll) / 100;    
    var result_3_ll = (work_hours_ll * lavorazione_3_ll) / 100;    
    var result_4_ll = (work_hours_ll * lavorazione_4_ll) / 100;
    var result_5_ll = (work_hours_ll * lavorazione_5_ll) / 100;
    var result_6_ll = (work_hours_ll * lavorazione_6_ll) / 100;    
    var result_7_ll = (work_hours_ll * lavorazione_7_ll) / 100;  
    /* FINE PRIMI RISULTATI E WORK HOURS */
    /* Variabili per la nuova lavorazione ed il nuovo risultato */
    /* NUOVA LAVORAZIONE 1 */
    var new_lavorazione_1_ll = parseFloat(document.getElementById("input_new_lavorazione_1_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_ll = (work_hours_ll * new_lavorazione_1_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 1 */
    /* NUOVA LAVORAZIONE 2 */
    var new_lavorazione_2_ll = parseFloat(document.getElementById("input_new_lavorazione_2_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_ll = (work_hours_ll * new_lavorazione_2_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 2 */
    /* NUOVA LAVORAZIONE 3 */
    var new_lavorazione_3_ll = parseFloat(document.getElementById("input_new_lavorazione_3_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_3_ll = (work_hours_ll * new_lavorazione_3_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 3 */
    /* NUOVA LAVORAZIONE 4 */
    var new_lavorazione_4_ll = parseFloat(document.getElementById("input_new_lavorazione_4_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_4_ll = (work_hours_ll * new_lavorazione_4_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 4 */
    /* NUOVA LAVORAZIONE 5 */
    var new_lavorazione_5_ll = parseFloat(document.getElementById("input_new_lavorazione_5_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_5_ll = (work_hours_ll * new_lavorazione_5_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 5 */
    /* NUOVA LAVORAZIONE 6 */
    var new_lavorazione_6_ll = parseFloat(document.getElementById("input_new_lavorazione_6_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_6_ll = (work_hours_ll * new_lavorazione_6_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 6 */
    /* NUOVA LAVORAZIONE 7 */
    var new_lavorazione_7_ll = parseFloat(document.getElementById("input_new_lavorazione_7_ll").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_7_ll = (work_hours_ll * new_lavorazione_7_ll) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 7 */
      /**
       * 
       * 
       *
       * 
       **/
    /* INIZIO DATI PER LAVORAZIONE FERRO */

    /* Variabili che mi servono per calcolare e stampare i dati che mi servono */ 
    /* PRIMI RISULTATI E WORK HOURS PER LAVORAZIONE FERRO */
    work_hours_lf = parseFloat(document.getElementById("input_num_lf").value);
    var result_1_lf = (work_hours_lf * lavorazione_1_lf) / 100;
    var result_2_lf = (work_hours_lf * lavorazione_2_lf) / 100;    
    var result_3_lf = (work_hours_lf * lavorazione_3_lf) / 100;    
    var result_4_lf = (work_hours_lf * lavorazione_4_lf) / 100;
    var result_5_lf = (work_hours_lf * lavorazione_5_lf) / 100;
    var result_6_lf = (work_hours_lf * lavorazione_6_lf) / 100;    
    var result_7_lf = (work_hours_lf * lavorazione_7_lf) / 100;  
    /* FINE PRIMI RISULTATI E WORK HOURS */
    /* Variabili per la nuova lavorazione ed il nuovo risultato */
    /* NUOVA LAVORAZIONE 1 */
    var new_lavorazione_1_lf = parseFloat(document.getElementById("input_new_lavorazione_1_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_1_lf = (work_hours_lf * new_lavorazione_1_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 1 */
    /* NUOVA LAVORAZIONE 2 */
    var new_lavorazione_2_lf = parseFloat(document.getElementById("input_new_lavorazione_2_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_2_lf = (work_hours_lf * new_lavorazione_2_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 2 */
    /* NUOVA LAVORAZIONE 3 */
    var new_lavorazione_3_lf = parseFloat(document.getElementById("input_new_lavorazione_3_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_3_lf = (work_hours_lf * new_lavorazione_3_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 3 */
    /* NUOVA LAVORAZIONE 4 */
    var new_lavorazione_4_lf = parseFloat(document.getElementById("input_new_lavorazione_4_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_4_lf = (work_hours_lf * new_lavorazione_4_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 4 */
    /* NUOVA LAVORAZIONE 5 */
    var new_lavorazione_5_lf = parseFloat(document.getElementById("input_new_lavorazione_5_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_5_lf = (work_hours_lf * new_lavorazione_5_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 5 */
    /* NUOVA LAVORAZIONE 6 */
    var new_lavorazione_6_lf = parseFloat(document.getElementById("input_new_lavorazione_6_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_6_lf = (work_hours_lf * new_lavorazione_6_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 6 */
    /* NUOVA LAVORAZIONE 7 */
    var new_lavorazione_7_lf = parseFloat(document.getElementById("input_new_lavorazione_7_lf").value); // creo una varibaile per la nuova percentuale immessa dll'utente 
    var new_result_7_lf = (work_hours_lf * new_lavorazione_7_lf) / 100; // creo una variabile per il nuovo risultato
    /* FINE NUOVA LAVORAZIONE 7 */

    
    var excel = $JExcel.new("Verdana light 10 #333333");			// Default font

    excel.set({sheet: 0,value:"This is the lavoration sheet"});
    excel.addSheet({sheet: 0, value:"Sheet_config_operations"});
    
    
    var evenRow=excel.addStyle ({ 																	// Style for even ROWS
        border: "none,none,none,thin #333333"});													// Borders are LEFT,RIGHT,TOP,BOTTOM. Check $JExcel.borderStyles for a list of valid border styles
    
    
    var oddRow=excel.addStyle ({ 																	// Style for odd ROWS
        fill: "#ECECEC" , 																			// Background color, plain #RRGGBB, there is a helper $JExcel.rgbToHex(r,g,b)
        border: "none,none,none,thin #333333"}); 
    
    
                                                                                                    // We want ROW 3 to be EXTRA TALL
    
    var headers=["Lavorazioni","Percetuali Std","Percentuali Utente","ORE STD", "ORE CONFIG", "calendario"]; // This array holds the HEADERS text
    var formatHeader=excel.addStyle ( { 															// Format for headers
            border: "none,none,none,thin #333333", 													// 		Border for header
            font: "Calibri 12 #0000AA B"}); 														// 		Font for headers
    
    for (var i=0;i<headers.length;i++){																// Loop all the haders
        excel.set(0,i,0,headers[i],formatHeader);													// Set CELL with header text, using header format
        excel.set(0,i,undefined,"auto");															// Set COLUMN width to auto (according to the standard this is only valid for numeric columns)
    }
   /* INIZIO DATI LAVORAZIONE LENTI */
    for (var i=1;i<8;i++){ // for che stampa le righe
        for(var j = 0; j < 9; j ++){ // for che stampa le colonne
            
            /* Provo a stampare le date in sequenza  */

            excel.set(0,5, date + 1);

            /* Fine stampa le date in sequenza */

            excel.set(0,0,2,"LAVORAZIONE LENTI");
            excel.set(0,0,3, "fase 1");
            excel.set(0,0,4, "fase 2");
            excel.set(0,0,5, "fase 3");
            excel.set(0,0,6, "fase 4");
            excel.set(0,0,7, "fase 5");
            excel.set(0,0,8, "fase 6");
            excel.set(0,0,9, "fase 7");
    // fine della stampa delle lavorazioni nelle varie fasi
            excel.set(0,0,10, "     ");
    
    // adesso stampo le percentuali di default
            excel.set(0,1,3, lavorazione_1_ll + "%");
            excel.set(0,1,4, lavorazione_2_ll + "%");
            excel.set(0,1,5, lavorazione_3_ll + "%");
            excel.set(0,1,6, lavorazione_4_ll + "%");
            excel.set(0,1,7, lavorazione_5_ll + "%");
            excel.set(0,1,8, lavorazione_6_ll + "%");
            excel.set(0,1,9, lavorazione_7_ll + "%");
    // fine stampa percentuali
    
    // stampa delle percentuali immesse dall'utente 
            excel.set(0,2,3, new_lavorazione_1_ll + " %"); // calcolo fuori dalla funzione
            excel.set(0,2,4, new_lavorazione_2_ll + " %");
            excel.set(0,2,5, new_lavorazione_3_ll + " %");
            excel.set(0,2,6, new_lavorazione_4_ll + " %");
            excel.set(0,2,7, new_lavorazione_5_ll + " %");
            excel.set(0,2,8, new_lavorazione_6_ll + " %");
            excel.set(0,2,9, new_lavorazione_7_ll + " %");
    // fine stampa percentuali immesse dall'utente
    
    // adesso stampo i dati delle ore previste per ogni fase in base all'input iniziale dell'utente 
            excel.set(0,3,3, result_1_ll + " ore"); // calcolo fuori dalla funzione
            excel.set(0,3,4, result_2_ll + " ore");
            excel.set(0,3,5, result_3_ll + " ore");
            excel.set(0,3,6, result_4_ll + " ore");
            excel.set(0,3,7, result_5_ll + " ore");
            excel.set(0,3,8, result_6_ll + " ore");
            excel.set(0,3,9, result_7_ll + " ore");
    // fine stampa dati delle ore previste per ogni fase in base all'input iniziale dell'utente
    
    // stampa dei nuovi risultati prodotti in base alle percentuali immesse dall'utente        
            excel.set(0,4,3, new_result_1_ll + " ore"); // calcolo fuori dalla funzione
            excel.set(0,4,4, new_result_2_ll + " ore");
            excel.set(0,4,5, new_result_3_ll + " ore");
            excel.set(0,4,6, new_result_4_ll + " ore");
            excel.set(0,4,7, new_result_5_ll + " ore");
            excel.set(0,4,8, new_result_6_ll + " ore");
            excel.set(0,4,9, new_result_7_ll + " ore");
    // fine stampa dei nuovi risultati prodotti in base alle percentuali immesse dall'utente

    // INIZIO DATI LAVORAZIONE FERRO

    excel.set(0,0,10,"LAVORAZIONE FERRO");
            excel.set(0,0,11, "fase 1");
            excel.set(0,0,12, "fase 2");
            excel.set(0,0,13, "fase 3");
            excel.set(0,0,14, "fase 4");
            excel.set(0,0,15, "fase 5");
            excel.set(0,0,16, "fase 6");
            excel.set(0,0,17, "fase 7");
    // fine della stampa delle lavorazioni nelle varie fasi
            excel.set(0,0,18, "     ");
    
    // adesso stampo le percentuali di default
            excel.set(0,1,11, lavorazione_1_lf + "%");
            excel.set(0,1,12, lavorazione_2_lf + "%");
            excel.set(0,1,13, lavorazione_3_lf + "%");
            excel.set(0,1,14, lavorazione_4_lf + "%");
            excel.set(0,1,15, lavorazione_5_lf + "%");
            excel.set(0,1,16, lavorazione_6_lf + "%");
            excel.set(0,1,17, lavorazione_7_lf + "%");
    // fine stampa percentuali
    
    // stampa delle percentuali immesse dall'utente 
            excel.set(0,2,11, new_lavorazione_1_lf + " %"); // calcolo fuori dalla funzione
            excel.set(0,2,12, new_lavorazione_2_lf + " %");
            excel.set(0,2,13, new_lavorazione_3_lf + " %");
            excel.set(0,2,14, new_lavorazione_4_lf + " %");
            excel.set(0,2,15, new_lavorazione_5_lf + " %");
            excel.set(0,2,16, new_lavorazione_6_lf + " %");
            excel.set(0,2,17, new_lavorazione_7_lf + " %");
    // fine stampa percentuali immesse dall'utente
    
    // adesso stampo i dati delle ore previste per ogni fase in base all'input iniziale dell'utente 
            excel.set(0,3,11, result_1_lf + " ore"); // calcolo fuori dalla funzione
            excel.set(0,3,12, result_2_lf + " ore");
            excel.set(0,3,13, result_3_lf + " ore");
            excel.set(0,3,14, result_4_lf + " ore");
            excel.set(0,3,15, result_5_lf + " ore");
            excel.set(0,3,16, result_6_lf + " ore");
            excel.set(0,3,17, result_7_lf + " ore");
    // fine stampa dati delle ore previste per ogni fase in base all'input iniziale dell'utente
    
    // stampa dei nuovi risultati prodotti in base alle percentuali immesse dall'utente        
            excel.set(0,4,11, new_result_1_lf + " ore"); // calcolo fuori dalla funzione
            excel.set(0,4,12, new_result_2_lf + " ore");
            excel.set(0,4,13, new_result_3_lf + " ore");
            excel.set(0,4,14, new_result_4_lf + " ore");
            excel.set(0,4,15, new_result_5_lf + " ore");
            excel.set(0,4,16, new_result_6_lf + " ore");
            excel.set(0,4,17, new_result_7_lf + " ore");
    // fine stampa dei nuovi risultati prodotti in base alle percentuali immesse dall'utente
    
    
        }
    }
    excel.generate("Lavorazioni.xlsx");
    }