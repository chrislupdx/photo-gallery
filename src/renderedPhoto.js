//create a template function named template that creates LIs (via innerHTML assignment)
function renderedPhoto(image) {
    const template = document.createElement('template');
    const html = `<li id="photo">
    <p> ${image.title}</p>
    <img src="${image.url}" alt="">
</li>`;
    template.innerHTML = html;
// Return the dom fragment via the .content property:
    return template.content;
}

export default renderedPhoto;