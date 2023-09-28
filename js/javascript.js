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
            Skill_Item_Animation_Enable()
            break;
        case '3':
            selectednav(selval)
            Background_Item_Animation_Enable()
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
            nav_hover('2');
    }
}
function kmbt(mousetrg)
{
    if (mousetrg == 1)
    {
        document.getElementById('mt').setAttribute("style","display: block; position: relative; z-index: 2;")
        document.getElementById('mt').setAttribute("class","CallCard pull-right")
    }
    else{
        document.getElementById('mt').setAttribute("style","display: none;")
    }
}
const sleepNow = (king) => new Promise((resolve) => setTimeout(resolve, king)) //Promise method
async function Skill_Item_Animation_Enable() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('skill_'+[i]).style.display = "none";
    }
    for (let i = 1; i <= 3; i++) {
        await sleepNow(500)
        document.getElementById('skill_'+[i]).style.display = "block";
    }
}
async function Background_Item_Animation_Enable() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Background_'+[i]).style.display = "none";
    }
    for (let i = 1; i <= 3; i++) {
        await sleepNow(500)
        document.getElementById('Background_'+[i]).style.display = "block";
    }
}


function nav_hover(navval)
{
    if(navval == 1)
    {
        document.getElementById('formHeader').setAttribute("class","slidedown breadcrumb")
        document.getElementById('navopen').style.display = "none";
        document.getElementById('navclose').setAttribute("class","navbar_hover slidedown")
        document.getElementById('navclose').setAttribute("style","display: block; margin-top: -21px;")
        document.getElementById('bodyDiv').style.paddingTop = "60px";
    }
    else{
        document.getElementById('formHeader').setAttribute("class","slideup breadcrumb")
        document.getElementById('navclose').style.display = "none";
        document.getElementById('navopen').setAttribute("class","navbar_hover slideup")
        document.getElementById('navopen').setAttribute("style","display: block; margin-top: -21px;")
        document.getElementById('bodyDiv').style.paddingTop = "20px";
    }
}