$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const quest1 = parseInt($("#environment").val());
    const quest2 = parseInt($("#comply").val());
    const quest3 = parseInt($("#reason").val());    
    const quest4 = parseInt($("#pokemon").val());
    const quest5 = parseInt($("#vacation").val());
    const total = quest1 + quest2 + quest3 + quest4 + quest5;
    
    if(total >= 5) {
      let resultVal = "Python";
      $("#language-suggested").text(resultVal);
    } else if (total <= 6 && total >= 10) {
      let resultVal = "Swift";
      $("#language-suggested").text(resultVal);
    } else {
      let resultVal = "Ruby";
      $("#language-suggested").text(resultVal);
    }
      $("#result").show();
    
  });
});



// if(total >= 5) {
//   let resultVal = "Python";
//   $("#language-suggested").text(resultVal);
//   } else if (total <= 6 && total >= 10) {
//     let resultVal = "Swift";
//     $("#language-suggested").text(resultVal);
//   } else {
//     let resultVal = "Ruby";
//     $("#language-suggested").text(resultVal);
//   }
//   $("#result").show();