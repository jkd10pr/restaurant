import picture1 from './assets/tomatoes.jpeg'
import picture2 from './assets/waiters.jpeg'
import picture3 from './assets/chef.jpeg'

const createInfoCard = (importedImg,alternativeTitle,text) =>{
    let card  = document.createElement('div');
    let image = new Image();
    let paragraph = document.createElement('p');

    card.classList.add('info-card');

    image.classList.add('info-card-image');
    image.src = importedImg;
    image.alt=alternativeTitle;

    paragraph.classList.add('info-card-text');
    paragraph.innerText=text;

    card.appendChild(image);
    card.appendChild(paragraph);
    
    return card;   
}

const loadHome = () =>{
    let mainWrapper = document.createElement('div');
    mainWrapper.id = 'main-wrapper';
    mainWrapper.classList.add('home-tab');

    mainWrapper.appendChild(createInfoCard(picture1,'picture of fresh tomatoes','The unique taste of our products is coming from all the quality raw materials we use in our kitchens. We understand the importance of always having fresh ingredients for our chefs to work with.'));

    mainWrapper.appendChild(createInfoCard(picture2,'a picture of waiters cleaning the table','Our staff is trained to give you the best dining experience possible. With our high standards, we keep our restaurants clean and comfortable, all so you can relax and enjoy your meal.'));

    mainWrapper.appendChild(createInfoCard(picture3,'a picture of chef making pizza','The kitchens of our restaurants are occupied by some of the greatest pizza makers working right now. By coming to one of our places, you are guaranteed to enjoy the work of real masters.'));

    return mainWrapper;
}

export default loadHome;