function afficherFormulaire() {
    var formulaire = document.getElementById("formulaire");
    formulaire.style.display = "block";
}

document.getElementById("formulaire").addEventListener("submit",function(event){
    event.preventDefault(); //rechargemet de la page pas si traitement pas finit
    //traitement ajax

    var forme = document.getElementById("formulaire");
    forme.style.display = "none";
})