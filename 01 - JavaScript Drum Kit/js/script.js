window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    const div = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    div.classList.add('playing');
    div.addEventListener('transitionend', (e) => {
        div.classList.remove('playing');
    });
    // div.classList.remove('playing');
});

