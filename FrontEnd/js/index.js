const tousSet = new Set();
const objetsSet = new Set();
const appSet = new Set();
const hotRestSet = new Set();

const imagesArray = [];
const imgCatIdArray = [];
const catArray = [];

fetch ('http://localhost:5678/api/works')
    .then((datas) => {
        datas.json()
        .then((elements) => {

            console.log(elements);

            // loop to see the elements in the console
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i]);
            }

            // loop to create the images in js
            for (let i = 0; i < elements.length; i++) {

                //creating the figure and the image
                let figureElement = document.createElement('figure');
                let imageElement = document.createElement('img');
                imagesArray.push(figureElement); //add each element into array

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

                // giving each image its category number 
                let categoryId = values[3];
                imgCatIdArray.push(categoryId); 


            } 
    
        
    


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
                        
                        catArray.push(tousCategory);


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

                            catArray.push(liCategories);
                        }  

                        // css of the categories
                        catContainer.style.display = 'flex';
                        catContainer.style.justifyContent = 'center';
                        
                        let buttonTous = catArray[0];
                        let buttonObjets = catArray[1];
                        let buttonApp = catArray[2];
                        let buttonHot = catArray[3];
                        
                        imagesArray[1].style.border = '2px solid orange';
                        buttonObjets.style.border = '2px solid green';


                    


                
                



                

                       

                        for (let i = 0; i < imagesArray.length; i++) {
                            tousSet.add(imagesArray[i]);

                            if (imgCatIdArray[i] = 1) {
                                objetsSet.add(imagesArray[i]);
                            }

                            if (imgCatIdArray[i]= 2) {
                                appSet.add(imagesArray[i]);
                            }

                            if (imgCatIdArray[i] = 3) {
                                hotRestSet.add(imagesArray[i]);
                            }

                        }

                        const showSet = (set) => {

                            for (let i=0; i < imagesArray.length; i++) {
                                imagesArray[i].style.display = none;
                            }
                            
                            /*
                            for (let i=0; i < set.length; i++) {
                                let setElements = set[i];
                                setElements.style.display = visible;
                            } */
                        }

                        
                        buttonTous.addEventListener('click', showSet(tousSet));
                        buttonObjets.addEventListener('click', showSet(objetsSet));
                        buttonApp.addEventListener('click', showSet(appSet));
                        buttonHot.addEventListener('click', showSet(hotRestSet));
                        

                        
                        

                    })

                })
        })
    }) 
                
