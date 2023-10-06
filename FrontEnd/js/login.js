

function ajoutListenerLogin() {

    const form = document.getElementById("form");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        
        event.preventDefault();

        const login = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };
    
        const chargeUtile = JSON.stringify(login);
    
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        })
    
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la connexion");
            }
            return response;
        })
    
        .then(data => {
            
            data.json().then(token => {
                console.log(token);
                localStorage.setItem("token", token.token);
                localStorage.setItem("userId", token.userId);

            })
    
        })
    
        .catch(error => {
            console.error("Il y a eu un problème avec l'opération fetch:", error);
        });

        if (login.email == "sophie.bluel@test.tld" && login.password == "S0phie") {
            window.location.assign("file:///C:/Users/Sophie/Desktop/PROJETARCHIWEBOS/FrontEnd/index.html");
            sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NjUxMjI3NywiZXhwIjoxNjk2NTk4Njc3fQ.t30pQ39-PANtdVzy9ki9EFX_GgAA4EFFJyuTamk_oWI");
            sessionStorage.setItem("userId", 1);
        } else {
            errorMessage.style.display = 'block';
            
        }

    });
}
    
    
