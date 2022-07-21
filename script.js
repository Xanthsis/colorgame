let boxes = document.querySelectorAll('.box');
let color = document.querySelector('.color-name');
let colors = RandomColors(6);
let pickedColor = colors[Math.floor(Math.random()*6)];

function RandomColors(num){
    let arr = [];
    for (let i=0 ; i< num ; i++)
    {
        arr.push(randomColor());
    }
    return arr;

}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

let easyBtn = document.querySelector('.easy');
let hardBtn = document.querySelector('.hard');
let newColor = document.querySelector('.new');
let statusText = document.querySelector('.status');
let bann = document.querySelector('.banner');
let count =6;

statusText.textContent = 'Choose Difficulty';

easyBtn.addEventListener('click', function(){

    bann.style.backgroundColor = 'yellow';

    statusText.textContent = "Guess the Color!";

    this.style.backgroundColor = "#333";
    hardBtn.style.backgroundColor = 'gray';
    
    count =3;
    colors = RandomColors(3);
    
    pickedColor=colors[Math.floor(Math.random()*3)];
    color.textContent = pickedColor;

    for(let i=0; i<boxes.length; i++)
    {
        if(i<3)
        {
            boxes[i].style.backgroundColor = colors[i];
        }
        else
        {
            boxes[i].style.display = "none";
        }
    }

    play();

});

hardBtn.addEventListener('click', function(){

    bann.style.backgroundColor = 'yellow';

    statusText.textContent = "Guess the Color!";

    this.style.backgroundColor = '#333';
    easyBtn.style.backgroundColor = 'gray';

    count = 6;
    colors = RandomColors(6);

    pickedColor=colors[Math.floor(Math.random()*6)];
    color.textContent = pickedColor;

    for(let i=0; i<boxes.length; i++)
    {
        boxes[i].style.backgroundColor= colors[i];
        boxes[i].style.display = 'block';
    }

    play();

});



function play(){
    for (let i=0; i<colors.length; i++)
    {
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].addEventListener('click' , function(){
            let selectedColor = this.style.backgroundColor ;
            if(selectedColor === pickedColor)
            {
                win();
            }
            else
            {
                lose(this);
                console.log(lose(this));
            }
        });
    }

    newColor.addEventListener('click', function(){

        newColor.textContent = "New Color";

        bann.style.backgroundColor = 'yellow';
        statusText.textContent = 'Guess the Color!';
    
        colors = RandomColors(count);
        pickedColor= colors[Math.floor(Math.random() * count)];
        color.textContent = pickedColor;
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.background = colors[i];
        }
    });
}

function win()
{
    statusText.textContent = 'Correct!!';

    for(let i=0; i<colors.length; i++)
    {
        boxes[i].style.backgroundColor = pickedColor;
    }

    bann.style.backgroundColor = pickedColor;
    bann.style.transitionProperty = "background-color";
    bann.style.transitionDuration = "0.7s";

    newColor.textContent = "Play Again";
}

function lose(that)
{
    statusText.textContent = 'Try Again!';
    that.style.backgroundColor = "antiquewhite";
    that.style.transitionProperty = "background-color";
    that.style.transitionDuration = "0.7s";
}