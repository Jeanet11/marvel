// function qu'on appelera lors du clic sur une lettre
 function getHeroes(lettre) {
//requete ajax 
  $.ajax ({
//url avec limit=100 pour avoir 100 noms +  nameStartsWith=
    url : "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + 
    lettre + "&limit=100&ts=10&apikey= =b5e59d3db4400c5d47a0e41d6fe41c61",

    success : function(data) {
// stockage du tableau des personnages dans une variable
      var tab = data.data.results;

// boucle pour parcourir le tableau et récuperer les éléments à afficher
      for(var i = 0; i < tab.length; i++) {
        var id = tab[i].id;
        var path = tab[i].thumbnail.path;
        var extension = tab[i].thumbnail.extension;
        var name = tab[i].name;
        var description = tab[i]. description;
        var comics = tab[i].comics.available;
        var stories = tab[i].stories.available;
        var series = tab[i].series.available;

// initialisation de la variable html  
        var html = "";
//ajout dans le html (tbody .donnees) des éléments récupéres dans un tableau
        $('.donnees').append(
          html += "<tr>\
          <td>" + id + "</td>\
          <td><img src='" + path + "." + extension + "'/></td>\
          <td>" + name + "</td>\
          <td>" + description + "</td>\
          <td>" + comics + "</td>\
          <td>" + stories + "</td>\
          <td>" + series + "</td>\
          </tr>");

    } // fin boucle for
    } // fin success
  }); // fin requete Ajax
} // fin fonction

//ajout d'un listener sur les boutons
$('.btn').click(function() {
// récupération de la valeur de la data de chaque bouton
  var lettre = $(this).data("letter");
//suppression du html de la page
  $('.donnees').empty();
//remplissage du tableau via la fonction getHeroes
  getHeroes(lettre);
});
