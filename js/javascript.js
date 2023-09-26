function content1(contentTrigger) //content changer and navbar interface
{
    var selval = contentTrigger; //passing value to selval
    switch (contentTrigger)
    {
        case '1':
            selectednav(selval) //selval pass to private function
            break;
        case '2':
            selectednav(selval)
            RepeatedWelcomeLoop()
            break;
        case '3':
            selectednav(selval)
            break;
        default:
            contentTrigger = 0;
            break;
    }
    function selectednav(trigger)
    {
        for (x=1;x<=3;x++)
            {
                document.getElementById('nav'+[x]).removeAttribute("style","font-size: medium; font-weight: bold; color: #ffffff;")
                document.getElementById('div'+[x]).style.display = "none";
            }
            document.getElementById('nav'+[trigger]).setAttribute("style","font-size: medium; font-weight: bold; color: #ffffff;")
            document.getElementById('div'+[trigger]).style.display = "block";
    }
}
function kmbt(mousetrg)
{
    if (mousetrg == 1)
    {
        document.getElementById('mt').style.display = "block";
    }
    else{
        document.getElementById('mt').style.display = "none";
    }
}
const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function RepeatedWelcomeLoop() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('skill_'+[i]).style.display = "none";
    }
    for (let i = 1; i <= 3; i++) {
        await sleepNow(500)
        document.getElementById('skill_'+[i]).style.display = "block";
    }
}