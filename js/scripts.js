// Back-End Logic
function Pizza(){
  this.pizzaType;
  this.pizzaSize;
  this.pizzaCost = 10;
  this.pizzaAddOn = 0;
  this.price = 0;
};

Pizza.prototype.add = function () {
  this.price += this.pizzaAddOn;
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
  } if (this.pizzaType === "Vegan") {
    this.pizzaAddOn += 1;
  } if (this.pizzaType === "Italian") {
    this.pizzaAddOn += 1;
  }
  // console.log(this.pizzaAddOn);
  console.log(this.price);
};

// (type [Pepperoni, Artichoke, Anchovy, Vegan, Italian], size [Small, Medium, Large, Extra Large]);


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


    var newPizza = new Pizza(pizzaType, pizzaSize, pizzaCost);
    var pizzaCost = newPizza.add();
    newPizza.add();
    console.log(newPizza.add());
    console.log(newPizza.pizzaType);
    console.log(newPizza.pizzaSize);
    console.log(newPizza.pizzaAddOn);
    console.log(newPizza.price);
    $("#pizza-price").append(pizzaCost + "<br>")
    $("#pizza-bottom").append(pizzaSize + "<br>")
    $("#pizza-bottom").show();
    $('#pizza-top').hide();
    $('#pizza-size').hide();
  });
});
