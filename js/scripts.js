// Back-End Logic
function Pizza(type, size){
  this.pizzaType = type;
  this.pizzaSize = size;
  this.price = 0;
};

Pizza.prototype.add = function () {
  this.pizzaAddOn = 10;
  var numChecked = $("input:checked").length;
  if (this.pizzaSize === 'Medium') {
    this.pizzaAddOn += 4;
  } if (this.pizzaSize === 'Large') {
    this.pizzaAddOn += 8;
  } if (this.pizzaSize === 'Extra Large') {
    this.pizzaAddOn += 12;
  } if (numChecked === 1) {
    this.pizzaAddOn += 1
  }  if (numChecked === 2) {
      this.pizzaAddOn += 2
  }  if (numChecked === 3) {
      this.pizzaAddOn += 3
  }  if (numChecked === 4) {
      this.pizzaAddOn += 4
  }  if (numChecked === 5) {
      this.pizzaAddOn += 5
  }
};

// Front-End Logic
$(document).ready(function(){
  $("form#pizza-top").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=pizza-type]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#pizza-select').append(pizzaToppings + "<br>");
    });

    var pizzaType = $("input:checkbox[name=pizza-type]:checked").val();
    var pizzaSize = $("#pizza-size").val();
    var newPizza = new Pizza(pizzaType, pizzaSize);
    newPizza.add();

    $("#pizza-bottom").append(pizzaSize + "<br>");
    $("#pizza-price").append("$"+newPizza.pizzaAddOn);
    $("#pizza-bottom").show();
    $("#pizza-price").show();
    $('#pizza-top').hide();
    $('#pizza-size').hide();
  });
});
