
  var ongletBibli = document.querySelector(".onglet-bibli");
  var ongletCat = document.querySelector(".onglet-cat");
  var bibli = document.querySelector("#shelf");
  var cat = document.querySelector("#cat");

document.querySelector(".onglet-bibli").addEventListener('click', function(){
    bibli.style.display = "flex";
    cat.style.display = "none"
  });

  ongletCat.addEventListener('click', function(){
    cat.style.display = "flex";
    bibli.style.display = "none";

  });
