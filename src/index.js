import renderedPhoto from './renderedPhoto.js';
import images from './data/images.js';

//grab photogal ul node
const ulFill = document.getElementById('photogal');

//use forEach to go through the images, render to UL as Li components
images.forEach(function(image) {
    const dom = renderedPhoto(image);
    ulFill.appendChild(dom);
});