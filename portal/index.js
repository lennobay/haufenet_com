const login_form = document.querySelector("form")

const searchParams = new URLSearchParams(window.location.search);
const redirect_path =  searchParams.get("redirect")



const base_api = "http://localhost:8080"

fetch(base_api + "/auth/session?origin=/portal", {
    "method": "GET",
    "credentials" : "include"

}).then((data) => {
    if(data.status == 202){
        console.log(redirect_path);
        if(redirect_path != null || redirect_path != undefined){
            window.location.href = redirect_path
        }
        else{
            window.location.href = "/portal/view"
        }
    }
})






addEventListener("submit", (event) => {
    event.preventDefault();
   document.getElementById("status-login").style.display  = "flex"
    document.getElementById("status-login").innerHTML = `<h1>Loading</h1>`
   
   
    const login_form_data = new FormData(login_form)
    const username  = login_form_data.get("username")
    const password = login_form_data.get("password");
    fetch(base_api + "/auth/login", {
        "method" : "POST",
        "credentials" : "include",
        "body" : JSON.stringify({
            username: username,
            password: password
        })

    })
    .then((data) => {
        if(data.status == 202){
            window.location.href = "/portal/view/"
              
            document.getElementById("status-login").style.backgroundColor = "rgba(66, 218, 5, 0.5)"
            document.getElementById("status-login").style.border = " 1px solid rgba(30, 238, 51, 0.8)"
             document.getElementById("status-login").innerHTML = `<h1>Redirecting</h1>`
        }   
        else{
             document.getElementById("status-login").style.backgroundColor = "rgba(217, 1, 1, 0.5)"
            document.getElementById("status-login").style.border = " 1px solid  rgba(255, 38, 38, 0.8)"
        }
             document.getElementById("status-login").innerHTML = `<h1>Failed</h1>`
              
    }).catch((err) => {

  
                     document.getElementById("status-login").style.backgroundColor = "rgba(217, 1, 1, 0.5)"
            document.getElementById("status-login").style.border = " 1px solid  rgba(255, 38, 38, 0.8)"
        
             document.getElementById("status-login").innerHTML = `<h1>Failed</h1>`

      }
)

    


})