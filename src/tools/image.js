import photo from '../images/photo01.jpg'

export default (tag) => {
    const img = document.createElement('img');
    img.src = photo;
    document.querySelector(tag).appendChild(img);
}