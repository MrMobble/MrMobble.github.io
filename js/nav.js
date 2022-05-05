const navigation = document.getElementById("navbar");

function navtoggle() 
{
    if (navigation.className == "navbar collapsed") {
        navigation.className = "navbar";
    }
    else {
        navigation.className = "navbar collapsed";
    }
}
