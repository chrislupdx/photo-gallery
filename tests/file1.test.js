QUnit.module('DOMcontentTest');
import renderedPhoto from './src';
const test = QUnit.test;

test('DOMcontent test', function(assert){
//arrange
    const image = {
        title: 'words',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const expected = `<li id="photo">
    <p> words</p>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="">
</li>`;

//act
    const result = renderedPhoto(image);

//assert
    assert.htmlEqual(result, expected);
});