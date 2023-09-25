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
            break;
        case '3':
            selectednav(selval)
            break;
        case '4':
            selectednav(selval)
            break;
        default:
            contentTrigger = 0;
            break;
    }
    function selectednav(trigger)
    {
        for (x=1;x<=4;x++)
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
        document.getElementById('mt').removeAttribute("style","opacity: 0;")
        document.getElementById('mt').setAttribute("style","opacity: 1;")
    }
    else{
        document.getElementById('mt').removeAttribute("style","opacity: 1;")
        document.getElementById('mt').setAttribute("style","opacity: 0;")
    }
}
