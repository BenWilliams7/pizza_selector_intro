// Back-End Logic
function Pizza(type, size){
  this.pizzaType = type;
  this.pizzaSize = size;
  this.price = 0;
};

Pizza.prototype.add = function () {
  this.pizzaAddOn = 10;
  if (this.pizzaSize === 'Medium') {
    this.pizzaAddOn += 4;
  } if (this.pizzaSize === 'Large') {
    this.pizzaAddOn += 8;
  } if (this.pizzaSize === 'Extra Large') {
    this.pizzaAddOn += 12;
  }
  if (this.pizzaType === "Pepperoni") {
      this.pizzaAddOn += 1;
  } if (this.pizzaType === "Artichoke") {
    this.pizzaAddOn += 1;
  } if (this.pizzaType === "Anchovy") {
    this.pizzaAddOn += 1;
  } if (this.pizzaType === "Mushrooms") {
    this.pizzaAddOn += 1;
  } if (this.pizzaType === "Onions") {
    this.pizzaAddOn += 1;
  }
  console.log(this.pizzaAddOn);
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

    console.log(newPizza.pizzaType);
    console.log(newPizza.pizzaSize);
    console.log(newPizza.price);
    $("#pizza-bottom").append(pizzaSize + "<br>");
    $("#pizza-price").append("$"+newPizza.pizzaAddOn);
    $("#pizza-bottom").show();
    $("#pizza-price").show();
    $('#pizza-top').hide();
    $('#pizza-size').hide();
  });
});
