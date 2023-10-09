function OpensideMenu(){
    document.getElementById('sideMenu').setAttribute("class","sideMenu slideIn");
    closeCallCard()
}
function closeSideMenu(){
    document.getElementById('sideMenu').setAttribute("class","sideMenu slideOut");
}
function OpenCallCard(){
    document.getElementById('CallCard').style.display = "block";
    closeSideMenu()
}
function closeCallCard(){
    document.getElementById('CallCard').style.display = "none";
}

// Revealing Item when in scrolled
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 210;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);