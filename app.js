$(document).ready(function() {
  //attach event listener to buttons(input?)
  //create function stub


$('.store-btn').on('click', function(event){
  localStorage.setItem('hrext', "three is the best");
});

$('.get-btn').on('click', function(event){
  localStorage.getItem('hrext');
});

$('.delete-btn').on('click', function(event){
  localStorage.removeItem('hrext');
});

});
