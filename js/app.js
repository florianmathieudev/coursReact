/**
 * Todolist
 */
var app = {
  init: function() {
    //Création du form
    app.createForm();
    //Creéation du compteur
    app.createCounter();
    //Création de la liste
    app.createList();
  },
  //Création du form
  createForm: function() {
    console.log('app createForm');
  },
  //Creéation du compteur
  createCounter: function() {
    console.log(app.createCounter);
  },
  //Création de la liste
  createList: function() {
    console.log(app.createList);
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
