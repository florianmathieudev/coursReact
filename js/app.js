/**
 * Todolist
 */
var app = {
  count: 0,
  init: function() {
    app.todo = document.getElementById('todo');
    //Création du form
    app.createForm();
    //Creéation du compteur
    app.createCounter();
    //Création de la liste
    app.createList();
  },

  //Création d'une tache
  onAddTask: function(evt) {
    evt.preventDefault();

    //valeur du champ
    var value = evt.target.elements.inputValue.value;
    var content = value.trim();

    // si la valeur n'est pas nul j'ajoute une tâche
    if (content.length > 0) {
      console.log('fais qc')
      app.generateTask({
        label: content,
        done: false
      });

      //incrémenter le compteur
      app.count++;
      app.updateCounter();
    }

    //Nettoie l'input
    evt.target.elements.inputValue.value = '';
  },


  //Création du form
  createForm: function() {
    console.log('app createForm');
    //balise <form> +enrichissement(id...)
    var form = document.createElement('form')
    form.id = 'todo-form';

    //intercepter le submit du form
    form.addEventListener('submit', app.onAddTask)



    //balise <input> text + placeholder et id
    var input = document.createElement('input');
    input.id = 'todo-input';
    input.placeholder = 'Ajouter une tâche';
    input.name = 'inputValue';
    input.type = 'text';
    //placer input dans le form
    form.appendChild(input);
    //placer le form dans le DOM
    app.todo.appendChild(form);
  },
  //mise à jour du compteur dans le DOM
  updateCounter: function () {
    app.counter.textContent = `${app.count} tâche(s) en cours`;
  },
  //Création du compteur
  createCounter: function() {
    console.log('app createCounter');

    //un compteur <div> + id
    var counter = document.createElement('div');
    app.counter = counter; //counter est dispo dans tout app
    counter.id = 'todo-counter';
    //définir le contenu du compteur
    counter.textContent = `${app.count} tâche(s) en cours`;
    //Ajouter au DOM
    app.todo.appendChild(counter);
  },
  //Création de la liste
  createList: function() {
    console.log('app createList');

    //liste <ul></ul> + enrichisssement
    var list = document.createElement('ul');
    app.list = list;
    list.id = 'todo-list'
    //générer des tâche temporaire
    
    
    //ajouter au DOM
    app.todo.appendChild(list);
  },
  generateTask: function(data) {
    //<li></li> le corp de la tâche + class css
    var task = document.createElement('li');
    task.className = 'task';

    if (data.done) {
      task.classList.add('task--done');
    }


    //checkbox (input) + label (span) => enrichissement : attributs
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data.done;

    var label = document.createElement('span');
    label.textContent = data.label;
    //ajout de l'input et du label à la tâche
    task.appendChild(checkbox);
    task.appendChild(label);
    //ajout de la tâche à la liste
    app.list.appendChild(task);
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
