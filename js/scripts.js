// Back-End Logic
function Pizza(type, size) {
  this.type = type;
  this.size = size;
  this.cost = 0;
}



// Front-End Logic
$(document).ready(function(){
  var newPizza = new Pizza();
  $("form#pizza-top").submit(function(event){
    event.preventDefault();
    $("#pizza-bottom").show();
    $("input:checkbox[name=pizza-type]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#pizza-select').append(pizzaToppings + "<br>");
    });
    var pizzaSize = $("#pizza-size").val();
    $("#pizza-bottom").append(pizzaSize + "<br>")
    $('#pizza-top').hide();
    $('#pizza-size').hide();
  });
});
