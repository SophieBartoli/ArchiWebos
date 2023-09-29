const tousSet = new Set();
const objetsSet = new Set();
const appSet = new Set();
const hotRestSet = new Set();

let fetchedElements = {};

fetch ('http://localhost:5678/api/works')
    .then((datas) => {
        datas.json()
        .then((elements) => {

            console.log(elements);
            fetchedElements = elements;

            // loop to see the elements in the console
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i]);
            }

            // loop to create the images in js
            for (let i = 0; i < elements.length; i++) {

                //creating the figure and the image
                let figureElement = document.createElement('figure');
                let imageElement = document.createElement('img');

                //getting the div 
                const container = document.getElementById('imgGallery');

                // putting figure in div and the images in figure
                container.appendChild(figureElement);
                figureElement.appendChild(imageElement);

                // getting url of images and putting it on image
                let element = elements[i];
                let values = Object.values(element);
                let imgUrl = values[2];
                imageElement.src = imgUrl;

                // getting title of images and putting it in figure
                let imgText = values[1]; 
                let imageCaption = document.createElement('figcaption');
                figureElement.appendChild(imageCaption);
                imageCaption.innerHTML = values[1];

            
            } 
    
        })
    })


fetch ('http://localhost:5678/api/categories')
    .then((datas) => { 
        datas.json()    
        .then((categories) => {

            console.log(categories);

            // loop to see the categories in the console
            for (let i = 0; i < categories.length; i++) {
                console.log(categories[i]);
            }

            //getting the categories div 
            const catContainer = document.getElementById('ulCategories');

            //creating the tous category
            let tousCategory = document.createElement('li');
            catContainer.appendChild(tousCategory);
            tousCategory.innerHTML = 'Tous';


            // loop to create the 3 categories in js
            for (let i = 0; i < categories.length; i++) {

                //creating the categories
                let liCategories = document.createElement('li');
                
                // putting the categories in the categories div
                catContainer.appendChild(liCategories);

                // getting categories info and putting them in ul
                let category = categories[i];
                let catValues = Object.values(category);
                let catText = catValues[1]; 
                liCategories.innerHTML = catText;

            }   

            // css of the categories
            const liCat = document.getElementById('liCategories');
            catContainer.style.display = 'flex';
            catContainer.style.justifyContent = 'center';



        })


    
    })



    .then((datas) => { 
        datas.json().then((elements) => {

            let element = elements[i];
            let values = Object.values(element);
            let categoryId = values[3];

            for (let i = 0; i < elements.length; i++) {
                tousSet.add(elements[i]);

                if (categoryId = 1) {
                    objetsSet.add(element);
                } else {

                }

                if (categoryId = 2) {
                    appSet.add(element);
                } else {

                }

                if (categoryId = 3) {
                    hotRestSet.add(element);
                } else {

                }


            }
        })
    }) 
    
