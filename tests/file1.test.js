const test = QUnit.test;


QUnit.module('DOMcontentTest');

function renderedphoto(image) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="photo">
    <p> ${image.title}</p>
    <img src="${image.url}" alt="">
</li>`;
    const dom = template.content;
    return dom;
}
test('DOMcontent test', function(assert){
    const image = {
        title: 'words',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
    const expected = `<li id="photo">
    <p> words</p>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="">
</li>`;

    const result = renderedphoto(image);

    assert.htmlEqual(result, expected);
});