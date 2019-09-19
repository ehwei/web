document.addEventListener("DOMContentLoaded", function(){
    document.body.onkeydown = (e) => {
        if  (e.keyCode == 70 && e.ctrlKey) { //CTRL-F = jump to search box. Not a collision because search-inside-current-note isn't implemented anyway :(
          document.getElementById("search-bar").focus();
          e.stopPropagation();
          e.preventDefault();  
        }
    }
});
  

