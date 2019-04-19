document.addEventListener("DOMContentLoaded", function(){
    document.body.onkeydown = (e) => {
        if (e.keyCode == 192) { //§ = jump to search box
          document.getElementById("search-bar").focus();
          e.stopPropagation();
          e.preventDefault();  
        }
    }
});
  

