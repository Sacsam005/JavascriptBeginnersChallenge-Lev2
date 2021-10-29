//challenge4: change the color of all buttons

var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];

for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}    

console.log(copyAllButtons);

    function buttonColorchange(buttonThing) {
    if (buttonThing.value==='red') {
    buttonRed();
}   else if (buttonThing.value==='blue') {
    buttonBlue();
}   else if (buttonThing.value==='reset') {
    buttonReset();
}   else (buttonThing.value==='random') 
    randomColors();

}

    function buttonRed () {
        for (let i=0; i< all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    
}
    
    function buttonBlue () {
        for (let i=0; i< all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-primary');
        } 
}

    function buttonReset () {
        for (let i=0; i< all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllButtons[i]);
        } 
}

    function randomColors() {
            let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
        
        for (let i=0; i< all_buttons; i++) {
            let randomNumber = Math.floor(Math.random() * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(choices[randomNumber]);
        }    

}
