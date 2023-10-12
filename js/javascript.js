function OpensideMenu(){
    document.getElementById('sideMenu').style.display = "block";
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

const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function PageEntering(Page){
  closeSideMenu()
  document.getElementById('PageEntering').style.display = "flex";
  await sleepNow(800)
  switch (Page)
    {
        case 'Intro':
            window.location.href = "../Intro/Intro.html";
            break;
        case 'Skills':
            window.location.href = "../Skills/Skills.html";
            break;
        case 'Background':
            window.location.href = "../Background/Background.html";
            break;
        case 'Certificate':
            window.location.href = "../Certificate/Certificate.html";
            break;
        default:
            break;
    }
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
  
  $(document).ready(function(){
    if(window.innerWidth < 992){
      $('.Skill_icon').addClass('col-3')
    }
    else{
        // Background
      $('#Background_Container').addClass('Background_Container')
      $('#BackgroundItem2').addClass('BackgroundItem2')
      // Skills
      $('#Skills_Container').addClass('Skills_Container')
      $('.Skill_icon').addClass('col-3')
      // Intro
      $('#Intro_Container').addClass('Intro_Container')
    }
  });