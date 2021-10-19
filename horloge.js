


var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    
    var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

    
    today = new Date();

    
    annee = today.getFullYear();

    
    listeMois = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    mois = listeMois[today.getMonth()]; 
     
    jourNUmero = today.getDate(); 

    
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; 


    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    
    heures = deuxChiffres(today.getHours());

    
    minutes = deuxChiffres(today.getMinutes());

    
    secondes = deuxChiffres(today.getSeconds());

    
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + "/" + mois + "/" + annee;

    
    setTimeout(affichageHeure, 1000);
}


affichageHeure();