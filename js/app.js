/**
 * Todolist
 */
var app = {
  init: function() {
    app.todo = document.getElementById('todo');
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
    //balise <form> +enrichissement(id...)
    var form = document.createElement('form')
    form.id = 'todo-form';
    //balise <input> text + placeholder et id
    var input = document.createElement('input');
    input.id = 'todo-input';
    input.placeholder = 'Ajouter une tâche';
    input.type = 'text';
    //placer input dans le form
    form.appendChild(input);
    //placer le form dans le DOM
    app.todo.appendChild(form);
  },
  //Création du compteur
  createCounter: function() {
    console.log('app createCounter');

    //balise <p>
    var p = document.createElement
    //balise <span>

    //mettre span dans p
  },
  //Création de la liste
  createList: function() {
    console.log('app createList');
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
