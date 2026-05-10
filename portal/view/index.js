
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("action-terminal").style.display = "none"
}, false);



const base_api = "http://localhost:8080"

const redirect_path = 




fetch(base_api + "/auth/session?origin=/portal/view/", {
    "method": "GET",
    "credentials" : "include"

}).then((data) => {
    if(data.status != 202){
            window.location.href = "/portal/?redirect=" + window.location
    }
}).catch( (err) => {
    window.location.href = "/portal"})


fetch(base_api + "/protected/portal/userinfo", {
    "method" : "GET",
    "credentials" : "include"
})
.then((data) => {return data.json()}).then((res) => {
        for(let i = 0; i < res.length; i++){
            document.getElementById("view-content").innerHTML = `<div onclick ="window.location.href = '${res[i].link}'" class="view-content-down">
            <h3 >${res[i].name}</h3></div>`

        }
})

function logoutSession(){
    document.getElementById("action-terminal").style.display = "flex"
    document.getElementById("action-terminal-content").innerHTML  = `<h1>Logout ...</h1>`
    fetch(base_api + "/auth/logout", {
        "method" : "GET",
        "credentials": "include"
    }).then(() =>{
        window.location.href = "/portal/"
    })

}
