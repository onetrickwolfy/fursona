const pressed = [];
const secretCode = 'footpaws';
var is_hidden = true; 

window.addEventListener('keyup', (e) => {

    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    if ( pressed.join('').includes(secretCode) ) {
        hiddenImage = document.getElementsByClassName('secret');

        for(let i = 0; i < hiddenImage.length; i++) {

            if(is_hidden) {
                hiddenImage[i].style.display = 'inline-block';
            } else {
                hiddenImage[i].style.display = 'none';
            }
        }

        is_hidden = !is_hidden;
        pressed.splice(0, pressed.length);
    }

    console.log(pressed);
});
