document.addEventListener('DOMContentLoaded', function(){
    var container = document.querySelector('.popup-countainer');
    var popupButtons = document.querySelectorAll('.open-popup');
    var closeup = document.querySelector('.closeup')

    for (let i = 0; i < popupButtons.length; i++) {
        popupButtons[i].addEventListener('click', function(){
            container.style.display = 'flex';
        });
    }

    container.addEventListener('click', function(event) {
        if (event.target == container) {
            container.style.display = 'none';
        }
    });

    closeup.addEventListener('click', function() {
        container.style.display ='none'
    })
});
