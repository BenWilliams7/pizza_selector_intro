$(document).ready(function(){
  $("form#pizza-survey").submit(function(event){
    event.preventDefault();
    $("#pizza-select").show();
    $("input:checkbox[name=pizza-type]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#pizza-select').append(pizzaToppings + "<br>");
    });
    $('#pizza-survey').hide();
  });
});
