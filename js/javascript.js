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
    $("#CallCard").css({"display":"block"})
    closeSideMenu()
}
function closeCallCard(){
    $("#CallCard").css("display","none")
    $("#ContentBlocker").css("display","none")
}
const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function Direct(){
  $("html").css({"overflow-y" : "hidden"})
  $(".floater").css({"display" : "none"})
  $("#PageEntering").css({"visibility":"hidden"})
  await sleepNow(500)
  PageEntering('Intro')
  await sleepNow(500)
  PageEntering('Skills')
  await sleepNow(500)
  PageEntering('Background')
  await sleepNow(500)
  PageEntering('Certificate')
  // =====================
  await sleepNow(2500)
  $(".floater").css({"display" : "block"})
  PageEntering('Intro')
  $("#PageEntering").css({"visibility":"visible"})
  $("html").css({"overflow-y" : "scroll"})
  $("#preload").html("");
}
async function PageEntering(Page){
  closeSideMenu()
  $(".navBar").addClass("navload");
  $("#PageEntering").css("display","flex")
  $(".fixedBG div").css({"display" : "none"})
  // await sleepNow(1000)
  let xhttp; //using http request
  let element = document.getElementById("Content"); //target id parameter
    if (Page) {
        if (Page == "Cert1"){
          window.location = "https://ude.my/UC-946f62bc-142d-4d75-b945-f73c135910a7";
          await sleepNow(3000)
          return $("#PageEntering").css("display","none")
        }
        if (Page == "Cert2"){
          window.location = "https://ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0";
          await sleepNow(3000)
          return $("#PageEntering").css("display","none")
        }
        else{

          $("#Content").css({"display": "none"})
          window.scrollTo({ top:0, left:0, behavior: "instant"});
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                  if (this.status == 200) {element.innerHTML = this.responseText;}
                  if (this.status == 404) {element.innerHTML = "<h1>Page not found.</h1>";}
              }
          }
          xhttp.open("GET", Page+"/"+Page+".html", true);
          xhttp.send();
          //==================
          $(".PageSection").html("<div>"+Page+"</div>");
          $(".navIntro").css({"font-weight": "" ,"color": ""}); //remove css style
          $(".navSkills").css({"font-weight": "" ,"color": ""}); //remove css style
          $(".navBackground").css({"font-weight": "" ,"color": ""}); //remove css style
          $(".navCertificate").css({"font-weight": "" ,"color": ""}); //remove css style
          $(".nav"+Page).css({"font-weight": "bold" ,"color": "white"}); //add css style
          await sleepNow(500)
          $("#PageEntering").css("display","none");
          $(".fixedBG div").css({"display" : "block"})
          await sleepNow(100)
          $("#Content").css({"display": "block"})
          $(".navBar").removeClass("navload");
          return;
        }
    }
}

window.addEventListener("scroll", responsiveness);
function responsiveness(){
  if(window.innerWidth >= 992){
    for (i=1;i<=3;i++){
      $('#card-' + [i] + ' .Skill_icon').removeClass('col-3')
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').addClass('col-lg-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').addClass('col-2')
      }
    }
  }
  else{
    for (i=1;i<=3;i++){
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-lg-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-2')
      }
      $('#card-' + [i] + ' .Skill_icon').addClass('col-3')
    }
  }
}
$(window).on("resize", function(){ //If page is resizing
  if(window.innerWidth >= 992){
    for (i=1;i<=3;i++){
      $('#card-' + [i] + ' .Skill_icon').removeClass('col-3')
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').addClass('col-lg-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').addClass('col-2')
      }
    }
  }
  else{
    for (i=1;i<=3;i++){
      if(i==1)
      {
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-lg-1')
      }else{
        $('#card-' + [i] + ' .Skill_icon').removeClass('col-2')
      }
      $('#card-' + [i] + ' .Skill_icon').addClass('col-3')
    }
  }
});
function ScrolltoTop(){
  $("html, body").animate({ scrollTop: "0" }, 200); //numeric css property only
}
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
    //reset hidden
    var sect = document.querySelectorAll(".Section_Card");
    if ($(window).scrollTop() < 10){
      for (var i = 0; i < sect.length; i++)
      {
        sect[i].classList.remove("active");
      }
    }
}