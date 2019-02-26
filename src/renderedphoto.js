function renderedphoto(image) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="photo">
    <p> ${image.title}</p>
    <img src="${image.url}" alt="">
</li>`;
    const dom = template.content;
    return dom;
}

export default renderedphoto();