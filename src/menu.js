const loadMenu = () =>{
    let menuHeader = document.createElement('div');
    let mainWrapper = document.createElement('div');
    mainWrapper.id = 'main-wrapper';
    mainWrapper.classList.add('menu-list-tab');
    menuHeader.innerText = 'Menu';
    menuHeader.classList.add('menu-tab-title')
    menuHeader.style.display = 'block';

    mainWrapper.appendChild(menuHeader);
    mainWrapper.appendChild(createMenuPosition('neapolitana.jpeg','Pizza Neapolitana','Classic neapolitan style pizza with tomato sauce, bazil and mozarella','30 $'));
    mainWrapper.appendChild(createMenuPosition('newyork.jpeg','Pizza New York Style','New York Style pizza with peperoni, mozarella and thin, crunchy crust.','20 $'));
    mainWrapper.appendChild(createMenuPosition('lasagne.jpeg','Lasagne Bolognese','Classic italian lasagne made with ground beef and red wine','25 $'));
    mainWrapper.appendChild(createMenuPosition('carbonara.jpeg','Spaghetti alla carbonara','Our own homemade pasta with eggs, guanciale and sour cream','10 $'));
    mainWrapper.appendChild(createMenuPosition('tiramisu.jpeg','Ricetta Tiramisù','Classic Italian no-bake dessert made with layers of coffee-soaked ladyfingers and incredible mascarpone cream','10 $'));


    return mainWrapper;
}

const createMenuPosition = (imgUrl,dishName,description,cost) => {
    let menuPosition = document.createElement('div');
    let image = document.createElement('img');
    let textWrapper = document.createElement('div');
    let title = document.createElement('div');
    let details = document.createElement('p');
    let price = document.createElement('div');

    menuPosition.classList.add('menu-item');
    image.classList.add('menu-image');
    textWrapper.classList.add('menu-text-wrapper');
    title.classList.add('menu-item-title');
    details.classList.add('menu-details');
    price.classList.add('menu-price');

    image.src=imgUrl;
    title.innerText = dishName;
    details.innerText = description;
    price.innerText = cost;

    textWrapper.appendChild(title);
    textWrapper.appendChild(details);

    menuPosition.appendChild(image);
    menuPosition.appendChild(textWrapper);
    menuPosition.appendChild(price);

    return menuPosition;
}

export default loadMenu;