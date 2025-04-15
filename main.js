// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
   document.querySelector('body').classList.toggle('movile-nav-active');
   this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: ['Front-End Developer!', 'Web Designer!','Youtuber!' ],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})
