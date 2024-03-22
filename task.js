const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    const rotator__cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function rotateAd() {
        rotator__cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % rotator__cases.length;
        rotator__cases[currentIndex].classList.add('rotator__case_active');
        rotator__cases[currentIndex].style.color = rotator__cases[currentIndex].dataset.color;
    }

    setInterval(rotateAd, rotator__cases[currentIndex].dataset.speed)

})
