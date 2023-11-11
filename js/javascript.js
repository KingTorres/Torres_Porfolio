function OpensideMenu(){
    $("#sideMenu").css("display","block")
    $("#sideMenu").attr("class","sideMenu slideIn")
    closeCallCard()
    $("#ContentBlocker").css("display","flex")
}
function closeSideMenu(){
    $("#ContentBlocker").css("display","none")
    $("#sideMenu").attr("class","sideMenu slideOut")
}
function OpenCallCard(){
    $("#CallCard").css("display","block")
    closeSideMenu()
    $("#ContentBlocker").css("display","flex")
}
function closeCallCard(){
    $("#CallCard").css("display","none")
    $("#ContentBlocker").css("display","none")
}
const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function PageEntering(Page){
  closeSideMenu()
  $("#PageEntering").css("display","flex")
  await sleepNow(1000)
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
        case 'Cert1':
            window.location = "https://ude.my/UC-946f62bc-142d-4d75-b945-f73c135910a7";
            break;
        case 'Cert2':
            window.location = "https://ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0";
            break;
        default:
            break;
    }
}
function ScrolltoTop(){
  $("html, body").animate({ scrollTop: "0" }, 200); //numeric css property only
}
$(document).ready(function(){ //If page is loaded
  if(window.innerWidth < 992){
    $('#Background_Container').removeClass('Background_Container')
    $('#BackgroundItem2').removeClass('BackgroundItem2')
    // Skills
    $('#Skills_Container').removeClass('Skills_Container')
    // Intro
    $('#Intro_Container').removeClass('Intro_Container')
  }
  else{
    // Background
    $('#Background_Container').addClass('Background_Container')
    $('#BackgroundItem2').addClass('BackgroundItem2')
    // Skills
    $('#Skills_Container').addClass('Skills_Container')
    // Intro
    $('#Intro_Container').addClass('Intro_Container')
  }
});
$(window).on("resize", function(){ //If page is resizing
  if(window.innerWidth < 992){
    $('#Background_Container').removeClass('Background_Container')
    $('#BackgroundItem2').removeClass('BackgroundItem2')
    // Skills
    $('#Skills_Container').removeClass('Skills_Container')
    // Intro
    $('#Intro_Container').removeClass('Intro_Container')
  }
  else{
      // Background
    $('#Background_Container').addClass('Background_Container')
    $('#BackgroundItem2').addClass('BackgroundItem2')
    // Skills
    $('#Skills_Container').addClass('Skills_Container')
    // Intro
    $('#Intro_Container').addClass('Intro_Container')
  }
});
$(window).ready(function(){ //If page is load
  if(window.innerWidth >= 992){
    for (i=1;i<=3;i++){
      $('#card-' + [i] + ' .Skill_icon').removeClass('col-3')
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').addClass('col-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').addClass('col-2')
      }
    }
  }
  else{
    for (i=1;i<=3;i++){
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-2')
      }
      $('#card-' + [i] + ' .Skill_icon').addClass('col-3')
    }
  }
});
$(window).on("resize", function(){ //If page is resizing
  if(window.innerWidth >= 992){
    for (i=1;i<=3;i++){
      $('#card-' + [i] + ' .Skill_icon').removeClass('col-3')
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').addClass('col-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').addClass('col-2')
      }
    }
  }
  else{
    for (i=1;i<=3;i++){
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-2')
      }
      $('#card-' + [i] + ' .Skill_icon').addClass('col-3')
    }
  }
});

// Back to top button
window.onscroll = function() {BacktoTopButton();}; //listener
function BacktoTopButton() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    $("#TopButton").css("display","flex")
  } else {
    $("#TopButton").css("display","none")
  }
}

// Revealing Item when in scrolled JAVASCRIPT
window.addEventListener("scroll", reveal);
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