
// fonction pour se connecter 
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

        //fetch pour ajouter les identifiants
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la connexion");
                }
                return response.json();
            })
            .then(data => {
                //enregistrement des identifiants en local
                console.log(data);
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.userId);
            })
            
            //redirection sur page d'accueil apres connection et enregistrement des identifiants en session
            .then(() => {
                if (login.email == "sophie.bluel@test.tld" && login.password == "S0phie") {
                    let currentLocation = location.toString();
                    let nextLocation = currentLocation.substring(0, currentLocation.lastIndexOf('/') + 1) + "index.html";
                    window.location.assign(nextLocation);
                    sessionStorage.setItem("token", localStorage.token);
                    sessionStorage.setItem("userId", localStorage.userId);
                }
            })

            .catch(() => {
                errorMessage.style.display = 'block';
            })
    });
}


