const imagesArray = [];
const catArray = [];
const catIdArray = [];

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

                imagesArray.push(figureElement); //add each img element into array

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

                catIdArray.push(categoryId); //add category numbers of each img into array


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
                        
                        catArray.push(tousCategory); //add tous li as index 0 of categories array


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

                            catArray.push(liCategories); //add other li as index 1,2,3 of categories array
                        }  

                        //naming each index of the categories array
                        let buttonTous = catArray[0];
                        let buttonObjets = catArray[1];
                        let buttonApp = catArray[2];
                        let buttonHot = catArray[3];

                        //shows all images when Tous clicked
                         buttonTous.onclick = function () {
                            for (let i = 0; imagesArray.length; i++) {
                                imagesArray[i].style.display = 'block';

                                //CSS of boutons when clicked
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

                        //shows object images when Objets clicked
                        buttonObjets.onclick = function () {
                            for (let i = 0; imagesArray.length; i++) {
                                if (catIdArray[i] === 1) {
                                    imagesArray[i].style.display = 'block';

                                    //CSS of boutons when clicked
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

                        //shows appartment images when Appartements clicked
                        buttonApp.onclick = function () {
                            for (let i = 0; imagesArray.length; i++) {
                                if (catIdArray[i] === 2) {
                                    imagesArray[i].style.display = 'block';

                                    //CSS of boutons when clicked
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

                        //shows hotel images when Hotel clicked
                        buttonHot.onclick = function () {
                            for (let i = 0; imagesArray.length; i++) {
                                if (catIdArray[i] === 3) {
                                    imagesArray[i].style.display = 'block';

                                    //CSS of boutons when clicked
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

                        // css of the categories
                        catContainer.style.display = 'flex';
                        catContainer.style.justifyContent = 'center';

                        buttonTous.style.display = 'block';
                        buttonTous.style.margin = '10px 10px 40px';
                        buttonTous.style.fontFamily = 'Syne';
                        buttonTous.style.color = "#1D6154"; 
                        buttonTous.style.border = "1px solid #1D6154";
                        buttonTous.style.borderRadius = "20px";
                        buttonTous.style.padding = '10px 20px';
                        buttonTous.style.cursor = 'default';


                        buttonObjets.style.display = 'block';
                        buttonObjets.style.margin = '10px 10px 40px';
                        buttonObjets.style.fontFamily = 'Syne';
                        buttonObjets.style.color = "#1D6154"; 
                        buttonObjets.style.border = "1px solid #1D6154";
                        buttonObjets.style.borderRadius = "20px";
                        buttonObjets.style.padding = '10px 20px';
                        buttonObjets.style.cursor = 'default';


                        buttonApp.style.display = 'block';
                        buttonApp.style.margin = '10px 10px 40px';
                        buttonApp.style.fontFamily = 'Syne';
                        buttonApp.style.color = "#1D6154"; 
                        buttonApp.style.border = "1px solid #1D6154";
                        buttonApp.style.borderRadius = "20px";
                        buttonApp.style.padding = '10px 20px';
                        buttonApp.style.cursor = 'default';


                        buttonHot.style.display = 'block';
                        buttonHot.style.margin = '10px 10px 40px';
                        buttonHot.style.fontFamily = 'Syne';
                        buttonHot.style.color = "#1D6154"; 
                        buttonHot.style.border = "1px solid #1D6154";
                        buttonHot.style.borderRadius = "20px";
                        buttonHot.style.padding = '10px 20px';
                        buttonHot.style.cursor = 'default';





                        


                        
                        

                    })

                })
        })
    }) 
                
