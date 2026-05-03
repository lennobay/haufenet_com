function menuopen() {
    document.querySelector(".content").style.display = "none";
    document.querySelector("#menubotton-open").style.display = "none";
    document.querySelector("#menubotton-close").style.display = "unset"

    const button = document.getElementById("menubutton_open")
    document.getElementById("menu").style.display = "unset";



}
function menuclose() {
    document.querySelector(".content").style.display = "unset";
        document.getElementById("menu").style.display = "none";
        document.querySelector("#menubotton-open").style.display = "unset";
    document.querySelector("#menubotton-close").style.display = "none   "

}
