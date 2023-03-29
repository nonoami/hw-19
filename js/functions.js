console.log("Your js file is loaded correctly!");
$(document).ready(function(){
    $("#spanish").hover(function(){
      $(this).css("color", "#FFF1CC");
      }, function(){
      $(this).css("color", "rgba(255, 241, 204, 0.65)");
    });
  });

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    $("#PAWS").hover(function(){
      $(this).css("background-color", "#FFF1CC");
      }, function(){
      $(this).css("background-color", "#FDDA7D");
    });
  });

  $(document).ready(function(){
    $("#EcoGeek").hover(function(){
      $(this).css("background-color", "#040E13");
      }, function(){
      $(this).css("background-color", "#223843");
    });
  });