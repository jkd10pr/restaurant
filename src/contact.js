import FacebookIcon from './assets/fb.png'
import TwitterIcon from './assets/twitter.png'

const loadContact = () =>{
    let mainWrapper = document.createElement('div');

    let contactCard = document.createElement('div');
    let name  = document.createElement('div');
    let addressStreet = document.createElement('div');
    let addressCity = document.createElement('div');
    let email = document.createElement('div');
    let telephone = document.createElement('div');
    let icons = document.createElement('div');
    let fbIcon = new Image();
    let twIcon = new Image();

    contactCard.classList.add('contact-card');
    name.classList.add('contact-name');
    addressStreet.classList.add('contact-address');
    addressCity.classList.add('contact-address');
    email.classList.add('contact-email');
    telephone.classList.add('contact-telephone');
    icons.classList.add('contact-icons')
    fbIcon.classList.add('contact-fb-icon');
    twIcon.classList.add('contact-twitter-icon');

    name.innerText = "Buongiorno Restaurante";
    addressStreet.innerText = "536 Depot St.Bronx,";
    addressCity.innerText='New York 10453';
    email.innerText = "buongiorno@gmail.com";
    telephone.innerText = '909 835 278';
    fbIcon.src=FacebookIcon;
    twIcon.src=TwitterIcon;

    contactCard.appendChild(name)
    contactCard.appendChild(addressStreet);
    contactCard.appendChild(addressCity);
    contactCard.appendChild(telephone);
    contactCard.appendChild(email);

    icons.appendChild(fbIcon);
    icons.appendChild(twIcon);
    contactCard.appendChild(icons);
    
    mainWrapper.appendChild(contactCard);





    mainWrapper.id = 'main-wrapper';
    mainWrapper.classList.add('contact-tab');


    

    return mainWrapper;
}

export default loadContact;