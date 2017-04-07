// Back-End Logic
function Pizza(type, size, quant){
  this.pizzaType = type;
  this.pizzaSize = size;
  this.pizzaTopQuant = quant;
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
  } if (this.pizzaTopQuant === '0') {
      this.pizzaAddOn += 0;
  } if (this.pizzaTopQuant === '1') {
    this.pizzaAddOn += 1;
  } if (this.pizzaTopQuant === '2') {
    this.pizzaAddOn += 2;
  } if (this.pizzaTopQuant === '3') {
    this.pizzaAddOn += 3;
  } if (this.pizzaTopQuant === '4') {
    this.pizzaAddOn += 4;
  } if (this.pizzaTopQuant === '5') {
    this.pizzaAddOn += 5;
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
    var pizzaTopQuant = $("#pizza-top-quant").val();
    var newPizza = new Pizza(pizzaType, pizzaSize, pizzaTopQuant);
    newPizza.add();

    $("#pizza-bottom").append(pizzaSize + "<br>");
    $("#pizza-price").append("$"+newPizza.pizzaAddOn);
    $("#pizza-bottom").show();
    $("#pizza-price").show();
    $('#pizza-top').hide();
    $('#pizza-size').hide();
  });
});
