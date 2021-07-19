const loadHeader = () => {
    let header = document.createElement('div');
    let titleText = document.createElement('div');
    let mainTitle = document.createElement('h1');
    let subTitle = document.createElement('h2');
    let titleBackground = document.createElement('div');
    let backgroundImage = document.createElement('img');
    let divToPositionButtons = document.createElement('div');
    let buttonsArea = document.createElement('div');
    let buttonHome = document.createElement('button');
    let buttonMenu = document.createElement('button');
    let buttonContact = document.createElement('button');

    header.id='title-wrapper';
    titleText.id='title-text';
    titleBackground.id = 'title-background';
    divToPositionButtons.id="relative-div";
    buttonsArea.id= 'nav-buttons';
    buttonHome.classList.add('button');
    buttonMenu.classList.add('button');
    buttonContact.classList.add('button');

    backgroundImage.src='background.jpeg';
    backgroundImage.alt='A background image showing a bunch of pizzas.';
    
    mainTitle.innerText = 'Buongiorno Restaurante';
    subTitle.innerText = 'Quite possibly the best pizza in the world';

    buttonHome.innerText = 'Home';
    buttonMenu.innerText = 'Menu';
    buttonContact.innerText = 'Contact';

    buttonHome.dataset.index = 1;
    buttonMenu.dataset.index = 2;
    buttonContact.dataset.index = 3;

    header.appendChild(titleText);
    header.appendChild(titleBackground);
    header.appendChild(divToPositionButtons);

    titleText.appendChild(mainTitle);
    titleText.appendChild(subTitle);

    titleBackground.appendChild(backgroundImage);

    divToPositionButtons.appendChild(buttonsArea);

    buttonsArea.appendChild(buttonHome);
    buttonsArea.appendChild(buttonMenu);
    buttonsArea.appendChild(buttonContact);

    return header;
}

export default loadHeader;