const loadFooter = ()=>{
    let footer = document.createElement('footer');

    let innerTextNode = document.createTextNode('Copyright \u00A9  jkd10pr');

    footer.appendChild(innerTextNode);
    footer.id = 'footer';

    return footer;
}

export default loadFooter;