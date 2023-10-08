const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function Intro() {
    await sleepNow(1000)
    document.getElementById('Entrance').style.display = "block";
    document.getElementById('intro1').style.display = "block";
    await sleepNow(3000) //entrance
    document.getElementById('intro1').setAttribute("class","container center-block Intro fadeout")
    await sleepNow(2500) //exit
    document.getElementById('intro1').style.display = "none";
    document.getElementById('intro2').style.display = "block";
    await sleepNow(3500) //exit
    document.getElementById('intro3').style.display = "block";
    await sleepNow(2500) //exit
    document.getElementById('intro4').style.display = "block";
    await sleepNow(2500) //exit
    document.getElementById('intro5').style.display = "block";
    await sleepNow(3000) //exit
    for(i=2;i<=5;i++)
    {
        document.getElementById('intro'+[i]).setAttribute("class","container center-block Intro fadeout")
    }
    await sleepNow(2000) //exit
    for(i=2;i<=5;i++)
    {
        document.getElementById('intro'+[i]).style.display = "none";
    }
    Welcome()
}
async function Welcome(){
    await sleepNow(1000)
    document.getElementById('E1').style.display = "block";
    await sleepNow(1000)
    document.getElementById('E2').style.display = "block";
    await sleepNow(2000)
    document.getElementById('E3').style.display = "block";
    await sleepNow(3000)
    document.getElementById('E3').setAttribute("class","Digital vibrate")
    document.getElementById('toWebsite').style.display = "inline-flex";
    await sleepNow(800)
    document.getElementById('Enter').setAttribute("class","gradientAnimation1")
}
async function Entering(){
    document.getElementById('cyberArea').style.display = "none";
    document.getElementById('Entrance').style.display = "none";
    await sleepNow(50)
    document.getElementById('Enlarge').style.display = "flex";
    await sleepNow(400)
    // document.getElementById('Enlarging').setAttribute("class","Enlarged")
    window.location.href = "intro/Intro.html";
}