
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
        FUNZIONE PER FARE IL FOGLIO EXCEL
*/

function go(){


work_hours = parseFloat(document.getElementById("input_num").value);
var result_1_ll = (work_hours * lavorazione_1_ll) / 100;    


var excel = $JExcel.new("Calibri light 10 #333333");			// Default font

// excel.set is the main function to generate content:
// 		We can use parameter notation excel.set(sheetValue,columnValue,rowValue,cellValue,styleValue) 
// 		Or object notation excel.set({sheet:sheetValue,column:columnValue,row:rowValue,value:cellValue,style:styleValue })
// 		null or 0 are used as default values for undefined entries		

//	excel.set( {sheet:0,value:"This is Sheet 1" } );
//	excel.addSheet("Sheet 2");

excel.set({sheet: 0,value:"This is the lavoration sheet"});
excel.addSheet({sheet: 0, value:"Sheet_config_operations"});


var evenRow=excel.addStyle ({ 																	// Style for even ROWS
    border: "none,none,none,thin #333333"});													// Borders are LEFT,RIGHT,TOP,BOTTOM. Check $JExcel.borderStyles for a list of valid border styles


var oddRow=excel.addStyle ({ 																	// Style for odd ROWS
    fill: "#ECECEC" , 																			// Background color, plain #RRGGBB, there is a helper $JExcel.rgbToHex(r,g,b)
    border: "none,none,none,thin #333333"}); 


                            																	// We want ROW 3 to be EXTRA TALL

var headers=["Lavorazioni","Percetuali Std","Percentuali Utente","ORE"];						// This array holds the HEADERS text
var formatHeader=excel.addStyle ( { 															// Format for headers
        border: "none,none,none,thin #333333", 													// 		Border for header
        font: "Calibri 12 #0000AA B"}); 														// 		Font for headers

for (var i=0;i<headers.length;i++){																// Loop all the haders
    excel.set(0,i,0,headers[i],formatHeader);													// Set CELL with header text, using header format
    excel.set(0,i,undefined,"auto");															// Set COLUMN width to auto (according to the standard this is only valid for numeric columns)
}
/*
excel.set(0,2,i, "Some other text");	// la variabile i mi serve per forza per scrivere dentro le caselle	// Some other text
excel.set(0,4,i, "Hello World");
// adesso stampo la lavorazione con le varie fasi
*/
// excel.set(sheetValue,columnValue,rowValue,cellValue,styleValue);
for (var i=1;i<8;i++){ // for che stampa le righe
    for(var j = 0; j < 4; j ++){ // for che stampa le colonne

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

// adesso stampo i dati delle ore 
        excel.set(0,2,3, result_1_ll + "ore"); // calcolo fuori dalla funzione
        excel.set(0,2,4, result_2_ll + "ore");
        excel.set(0,2,5, result_3_ll + "ore");
        excel.set(0,2,6, result_4_ll + "ore");
        excel.set(0,2,7, result_5_ll + "ore");
        excel.set(0,2,8, result_6_ll + "ore");
        excel.set(0,2,9, result_7_ll + "ore");
    }
}
excel.generate("Lavorazioni.xlsx");
}