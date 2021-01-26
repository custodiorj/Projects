const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    })

    changeStateColorText()
}

function changeStateColorText() {
    if(currentActive === 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

   if(currentActive == circles.length) {
       next.style.backgroundColor = 'green';
       next.innerHTML = 'Register';
   } else {
       next.style.backgroundColor = '#3498db';
       next.innerHTML = 'Next';
   }
    

    progress.style.width = ((currentActive -1 ) / (circles.length - 1)  * 100) + '%';
}