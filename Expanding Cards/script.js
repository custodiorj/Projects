const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if(document.querySelector('.active')) {
            removeActiveClass();
        } else {
            panel.classList.add('active');
        }
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

