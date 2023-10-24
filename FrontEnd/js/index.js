let imagesArray = [];
let catArray = [];
let catIdArray = [];


function fetchWorksElements() {
    fetch('http://localhost:5678/api/works')
        .then((datas) => {
            datas.json()
                .then((elements) => {
                    //clean data
                    imagesArray = [];
                    catArray = [];
                    catIdArray = [];

                    //console.log(elements);

                    // loop pour voir les elements dans la console
                    for (let i = 0; i < elements.length; i++) {
                        //console.log(elements[i]);
                    }

                    // loop pour creer les images dans le js
                    for (let i = 0; i < elements.length; i++) {

                        //creation de la figure et de l'image
                        let figureElement = document.createElement('figure');
                        let imageElement = document.createElement('img');

                        imagesArray.push(figureElement); //ajout de chaque image dans son array

                        //obtenir le div
                        const container = document.getElementById('imgGallery');

                        // mettre la figure dans le div et les images dans la figure
                        container.appendChild(figureElement);
                        figureElement.appendChild(imageElement);


                        // obtenir l'url des images et les mettre sur chaque image creee
                        let element = elements[i];
                        let values = Object.values(element);
                        let imgUrl = values[2];
                        imageElement.src = imgUrl;

                        // obtenir le titre de chaque image et les mettre sur image
                        let imgText = values[1];
                        let imageCaption = document.createElement('figcaption');
                        figureElement.appendChild(imageCaption);
                        imageCaption.innerHTML = values[1];

                        // donner le numero de categorie de chaque image
                        let categoryId = values[3];

                        catIdArray.push(categoryId); //ajouter les numeros de categories dans une array


                    }





                    fetch('http://localhost:5678/api/categories')
                        .then((datas) => {
                            datas.json()
                                .then((categories) => {

                                    //console.log(categories);

                                    // loop pour voir les categories dans la console
                                    for (let i = 0; i < categories.length; i++) {
                                        //console.log(categories[i]);
                                    }

                                    //obtenir le div des categories depuis HTML
                                    const catContainer = document.getElementById('ulCategories');

                                    //creation de la categorie tous
                                    let tousCategory = document.createElement('li');
                                    catContainer.appendChild(tousCategory);
                                    tousCategory.innerHTML = 'Tous';

                                    catArray.push(tousCategory); //mettre la categorie tous en index 0 dans l'array


                                    // loop pour creer les trois autres categories dans js
                                    for (let i = 0; i < categories.length; i++) {

                                        //creation des categories
                                        let liCategories = document.createElement('li');

                                        //mettre les categories dans le div des categories
                                        catContainer.appendChild(liCategories);

                                        // obtenir les informations des categories et les mettre dans l'ul
                                        let category = categories[i];
                                        let catValues = Object.values(category);
                                        let catText = catValues[1];
                                        liCategories.innerHTML = catText;

                                        catArray.push(liCategories); //mettre les autres categories sur les index 1,2,3
                                    }

                                    //nommer chaque index avec le nom de categories
                                    let buttonTous = catArray[0];
                                    let buttonObjets = catArray[1];
                                    let buttonApp = catArray[2];
                                    let buttonHot = catArray[3];

                                    //montrer toutes les images quand on appuie sur Tous
                                    buttonTous.onclick = function () {
                                        for (let i = 0; i < imagesArray.length; i++) {
                                            imagesArray[i].style.display = 'block';

                                            //CSS des boutons lors du clic
                                            buttonTous.style.color = 'white';
                                            buttonTous.style.backgroundColor = '#1D6154';

                                            buttonObjets.style.color = '#1D6154';
                                            buttonObjets.style.backgroundColor = 'white';
                                            buttonApp.style.color = '#1D6154';
                                            buttonApp.style.backgroundColor = 'white';
                                            buttonHot.style.color = '#1D6154';
                                            buttonHot.style.backgroundColor = 'white';

                                        }

                                    }

                                    //montrer les images d'objets quand on appuie sur Objets
                                    buttonObjets.onclick = function () {
                                        for (let i = 0; i < imagesArray.length; i++) {
                                            if (catIdArray[i] === 1) {
                                                imagesArray[i].style.display = 'block';

                                                //CSS des boutons lors du clic
                                                buttonObjets.style.color = 'white';
                                                buttonObjets.style.backgroundColor = '#1D6154';

                                                buttonTous.style.color = '#1D6154';
                                                buttonTous.style.backgroundColor = 'white';
                                                buttonApp.style.color = '#1D6154';
                                                buttonApp.style.backgroundColor = 'white';
                                                buttonHot.style.color = '#1D6154';
                                                buttonHot.style.backgroundColor = 'white';

                                            } else {
                                                imagesArray[i].style.display = 'none';
                                            }
                                        }

                                    }

                                    //montrer les images d'appartements quand on appuie sur Appartements
                                    buttonApp.onclick = function () {
                                        for (let i = 0; i < imagesArray.length; i++) {
                                            if (catIdArray[i] === 2) {
                                                imagesArray[i].style.display = 'block';

                                                //CSS des boutons lors du clic
                                                buttonApp.style.color = 'white';
                                                buttonApp.style.backgroundColor = '#1D6154';

                                                buttonObjets.style.color = '#1D6154';
                                                buttonObjets.style.backgroundColor = 'white';
                                                buttonTous.style.color = '#1D6154';
                                                buttonTous.style.backgroundColor = 'white';
                                                buttonHot.style.color = '#1D6154';
                                                buttonHot.style.backgroundColor = 'white';

                                            } else {
                                                imagesArray[i].style.display = 'none';
                                            }
                                        }

                                    }

                                    //montrer les images d'hotel quand on appuie sur Hotel
                                    buttonHot.onclick = function () {
                                        for (let i = 0; i < imagesArray.length; i++) {
                                            if (catIdArray[i] === 3) {
                                                imagesArray[i].style.display = 'block';

                                                //CSS des boutons lors du clic
                                                buttonHot.style.color = 'white';
                                                buttonHot.style.backgroundColor = '#1D6154';

                                                buttonObjets.style.color = '#1D6154';
                                                buttonObjets.style.backgroundColor = 'white';
                                                buttonApp.style.color = '#1D6154';
                                                buttonApp.style.backgroundColor = 'white';
                                                buttonTous.style.color = '#1D6154';
                                                buttonTous.style.backgroundColor = 'white';

                                            } else {
                                                imagesArray[i].style.display = 'none';
                                            }
                                        }

                                    }

                                    // CSS des categories
                                    catContainer.style.display = 'flex';
                                    catContainer.style.justifyContent = 'center';

                                    buttonTous.style.display = 'block';
                                    buttonTous.style.margin = '10px 10px 40px';
                                    buttonTous.style.fontFamily = 'Syne';
                                    buttonTous.style.color = '#1D6154';
                                    buttonTous.style.border = '1px solid #1D6154';
                                    buttonTous.style.borderRadius = '20px';
                                    buttonTous.style.padding = '10px 20px';
                                    buttonTous.style.cursor = 'pointer';


                                    buttonObjets.style.display = 'block';
                                    buttonObjets.style.margin = '10px 10px 40px';
                                    buttonObjets.style.fontFamily = 'Syne';
                                    buttonObjets.style.color = '#1D6154';
                                    buttonObjets.style.border = '1px solid #1D6154';
                                    buttonObjets.style.borderRadius = '20px';
                                    buttonObjets.style.padding = '10px 20px';
                                    buttonObjets.style.cursor = 'pointer';


                                    buttonApp.style.display = 'block';
                                    buttonApp.style.margin = '10px 10px 40px';
                                    buttonApp.style.fontFamily = 'Syne';
                                    buttonApp.style.color = '#1D6154';
                                    buttonApp.style.border = '1px solid #1D6154';
                                    buttonApp.style.borderRadius = '20px';
                                    buttonApp.style.padding = '10px 20px';
                                    buttonApp.style.cursor = 'pointer';


                                    buttonHot.style.display = 'block';
                                    buttonHot.style.margin = '10px 10px 40px';
                                    buttonHot.style.fontFamily = 'Syne';
                                    buttonHot.style.color = '#1D6154';
                                    buttonHot.style.border = '1px solid #1D6154';
                                    buttonHot.style.borderRadius = '20px';
                                    buttonHot.style.padding = '10px 20px';
                                    buttonHot.style.cursor = 'pointer';

                                    // enlever le bouton login et mettre le bouton logout quand on est connectes
                                    let loginButton = document.getElementById('loginButton');
                                    let logoutButton = document.getElementById('logoutButton');
                                    let ulCategories = document.getElementById('ulCategories');
                                    let projetsDiv = document.getElementById('projetsDiv');


                                    if (sessionStorage.userId == 1 && sessionStorage.token) {
                                        loginButton.style.display = 'none';
                                        logoutButton.style.display = 'block';
                                        ulCategories.style.display = 'none';
                                        projetsDiv.style.margin = '0px 0px 50px';
                                    } else {
                                        loginButton.style.display = 'block';
                                        logoutButton.style.display = 'none';
                                        ulCategories.style.display = 'flex';
                                        modifierButton.style.display = 'none';


                                    }


                                })

                        })
                })

        })
}

fetchWorksElements();

//action du bouton logout
let logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', function (event) {
    sessionStorage.clear();
    window.location.reload();

})

//action du bouton modifier 
let modifierButton = document.getElementById('modifierButton');
let boiteModal = document.getElementById('boiteModal');

modifierButton.addEventListener('click', function (event) {
    boiteModal.style.display = 'flex';
})

//fermeture de la fenetre modale lors du clic sur la croix ou hors de la fenetre
let modalClose = document.getElementById('modalClose');
let closeOut = document.getElementById('closeOut');

modalClose.addEventListener('click', function (event) {
    boiteModal.style.display = 'none';
})

closeOut.addEventListener('click', function (event) {
    boiteModal.style.display = 'none';
})

//fetch de la fenetre modale
let modalWorks = document.getElementById('modalWorks');


function fetchModalWorks() {
    fetch('http://localhost:5678/api/works')
        .then((datas) => {
            datas.json()
                .then((works) => {

                    //Vider la fenêtre modale
                    modalWorks.innerHTML = '';

                    //Remplir la fenêtre modale avec du nouveau code
                    for (let i = 0; i < works.length; i++) {

                        let modalImages = document.createElement('img');
                        let modalFigure = document.createElement('figure');
                        let imageDeleteButton = document.createElement('button');
                        let imageDeleteButtonIcon = document.createElement('i');
                        let deleteButtonArray = [];

                        imageDeleteButtonIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

                        modalWorks.appendChild(modalFigure);
                        modalFigure.appendChild(modalImages);
                        modalFigure.appendChild(imageDeleteButton);
                        imageDeleteButton.appendChild(imageDeleteButtonIcon);

                        deleteButtonArray.push(imageDeleteButton);
                        console.log(deleteButtonArray);

                        let work = works[i];
                        let workValues = Object.values(work);
                        let workUrl = workValues[2];
                        modalImages.src = workUrl;

                        modalFigure.setAttribute('id', 'modalFigure');
                        imageDeleteButton.setAttribute('id', 'imageDeleteButton');

                        imageDeleteButton.addEventListener('click', function (event) {

                            event.preventDefault();






                        })
                        
                    }


                })
        })
}

fetchModalWorks();

//// fenetre d'ajout des projets ////

let modalClosePhoto = document.getElementById('modalClosePhoto');
let photoSubmit = document.getElementById('photoSubmit');
let modal = document.getElementById('modal');
let modalPhoto = document.getElementById('modalPhoto');
let modalWorksReturn = document.getElementById('modalWorksReturn');

modalClosePhoto.addEventListener('click', function (event) {
    boiteModal.style.display = 'none';
})

photoSubmit.addEventListener('click', function (event) {
    modal.style.display = 'none';
    modalPhoto.style.display = 'flex';
})

//retour sur premiere fenetre et reset de l'image
modalWorksReturn.addEventListener('click', function (event) {
    modal.style.display = 'flex';
    modalPhoto.style.display = 'none';
    logoAjoutPhoto.style.display = 'block';
    maxMoAjoutPhoto.style.display = 'block';
    lienAjoutPhoto.style.display = 'block';
    logoAjoutPhoto.style.display = 'none';
    maxMoAjoutPhoto.style.display = 'none';
    lienAjoutPhoto.style.display = 'none';
})

//lier le bouton cree au bouton input file cache
let lienAjoutPhoto = document.getElementById('lienAjoutPhoto');
let lienFile = document.getElementById('lienFile');
let logoAjoutPhoto = document.getElementById('logoAjoutPhoto');
let maxMoAjoutPhoto = document.getElementById('maxMoAjoutPhoto');

lienAjoutPhoto.addEventListener('click', function (event) {
    document.getElementById('lienFile').click();
})

//charger la photo choisie
let imageProjet = document.getElementById('imageProjet');
let imageProjetUrl = '';

lienFile.onchange = function () {
    imageProjet.src = URL.createObjectURL(lienFile.files[0]);
    imageProjetUrl = imageProjet.src;
    logoAjoutPhoto.style.display = 'none';
    maxMoAjoutPhoto.style.display = 'none';
    lienAjoutPhoto.style.display = 'none';

    if (lienFile.files[0].size > 4194304) {
        alert("Ficher trop lourd !");
        imageProjet.style.display = 'none';
        window.location.reload();
    }
}

//pouvoir changer l'image lors du clic sur image
imageProjet.addEventListener('click', function (event) {
    lienFile.click();
})

//actions du bouton submit de la nouvelle photo
let titreInput = document.getElementById('titreInput');
let categorieSelect = document.getElementById('categorieSelect');
let ajoutPhoto = document.getElementById('ajoutPhoto');

function ajoutPhotoFun() {

    modalPhoto.addEventListener('submit', function (event) {

        if (titreInput.value !== '' && categorieSelect.value !== '' && imageProjetUrl !== '') {

            event.preventDefault();

            let token = sessionStorage.getItem("token");

            console.log(token);

            if (!token) {
                alert("Token manquant. Veuillez vous reconnecter.");
                return;
            }

            const formData = new FormData();

            formData.append('image', lienFile.files[0]);
            formData.append('title', titreInput.value);
            formData.append('category', categorieSelect.value);

            fetch("http://localhost:5678/api/works", {
                method: "POST",
                headers: {
                    "Authorization": 'Bearer ' + token
                },
                body: formData,
            })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw err; });
                    }
                    return res.json();
                })
                .then(createWork => {
                    console.log(createWork);
                    localStorage.setItem("title", createWork.title);
                    localStorage.setItem("categoryId", createWork.categoryId);
                    localStorage.setItem("imageUrl", createWork.imageUrl);
                })
                .catch(problem => {
                    console.error("Il y a eu un problème avec l'opération fetch:", problem);
                });
        } else {
            alert("Champs obligatoires");
        }

        modalPhoto.style.display = 'none';
        boiteModal.style.display = 'none';
    });
}





