// Créer une fonction pour récupérer une collection MongoDB
function getTasks(){

  // Afficher les documents de la collection MongoDB => find()
  $.ajax({
    url: 'http://localhost:8080/api/tasks',
    dataType: 'JSON',
    type: 'GET',

    success: function(data){
      // Boucle sur la collection MongoDb
      for( i = 0; i < data.length; i++ ){

        // Ajout des tâches dans le DOM
        addTask(data[i].title, data[i]._id, data[i].isDone);
      }
    },

    error: function(err){ },

    complete: function(){

    }
  })

}

// Appeler la fonction pour charger la collection
getTasks();

function addTask(title, id, isDone){

  // Ajouter des un article dans la dernière section du main
  $('section:last').append(''+
    '<article id="task' + id + '" class="taskListItem taskIsDone' + isDone + '">' +
    '<h2>' + title + '</h2>' +
    '<i class="fa fa-check-circle" aria-hidden="true" data-content="' + id + '" data-isDone="' + isDone + '"></i>' +
    '<i class="fa fa-trash" aria-hidden="true" data-content="' + id + '"></i>' +
    '</article>'
  );
}

let myForm = $('form');
let taskTitle = $('[name="title"]');
let erroAddTask = $('.errorAddTask');

myForm.submit(function(evt){
  evt.preventDefault();

  // Vérifier la présence de valeur dans le formualire
  if( taskTitle.val() ){

    // Ajouter un document dans la collection MongoDB => post()
    $.ajax({
      url: 'http://localhost:8080/api/task',
      data: myForm.serialize(),
      dataType: 'JSON',
      type: 'POST',


      success: function(data){
        // Ajouter la nouvelle tâche dans le DOM
        addTask(data.title, data._id, false)
      },

      error: function(err){ console.log(err) },

      complete: function(){
        // Vider le formulaire
        myForm[0].reset();
      }
    })

  } else{
    // Afficher le message d'erreur
    erroAddTask.fadeIn();
  }

});
