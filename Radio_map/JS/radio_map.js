var currentRadio = new Image;
var radio = new Array();
initUrl();

function initUrl(){
    radio['RTL'] = 'https://icecast.rtl.fr/rtl-1-44-128?listen=webGJmqBU59boQ7rZDjrGO5e4';
    radio['Europe 1'] = 'http://ais-live.cloud-services.paris:8000/europe1.mp3';
    radio['France Inter'] = 'http://icecast.radiofrance.fr/franceinter-midfi.mp3';
    radio['Chérie FM'] = 'https://scdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3';
    radio['Oui FM'] = 'http://stream.ouifm.fr/ouifm-high.mp3';
    radio['RMC'] = 'http://chai5she.cdn.dvmr.fr/rmcinfo';
    radio['RTL2'] = 'https://icecast.rtl.fr/rtl2-1-44-128?listen=webGJmqBU59boQ7rZDjrGO5e4';
    radio['France Info'] = 'http://direct.franceinfo.fr/live/franceinfo-midfi.mp3 ';
    radio['Nostalgie'] = 'https://scdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3';
    radio['Rire et Chansons'] = 'https://scdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3';
    radio['Sud Radio'] = 'https://start-sud.ice.infomaniak.ch/start-sud-high.mp3';
    radio['Nova'] = 'http://radionova.ice.infomaniak.ch/radionova-256.aac';
    radio['Fip'] = 'http://icecast.radiofrance.fr/fip-hifi.aac';
}

function selectStation(parm){
    var lecteur     = document.getElementById("lecteur");
    var afficheur   = document.getElementById("affichage");
    afficheur.innerHTML = parm.title;

    // on a cliqué sur la station en cours de lecture: affichage "pause" dans l'afficheur
    if (parm.title == currentRadio.title) {
        if (lecteur.paused) {
            lecteur.play();
            parm.className = "selected";
            afficheur.innerHTML = parm.title ;
        } else {
            lecteur.pause();
            parm.className = "selected paused";
            afficheur.innerHTML = parm.title + " / en pause";
        }
        return ;
    } 
    console.log(parm.title + " = " + radio[parm.title]) ;
    lecteur.src = radio[parm.title];
    lecteur.play();
    parm.className = "selected";    // on applique la classe "selected" sur la station sélectionnée
    currentRadio.className = "";    // on supprime la classe "selected" sur la précédente station
    currentRadio = parm ;     
}

function viewLecteur(afficheur) {
    var lecteur = document.getElementById("lecteur");
    if (lecteur.style.visibility == "hidden")
        lecteur.style.visibility = "" ;
    else
        lecteur.style.visibility = "hidden" ;
}