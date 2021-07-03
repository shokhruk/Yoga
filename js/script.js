window.addEventListener('DOMContentLoaded', function() {
    // tabs

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }

    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2022-12-23';

    function getTimeRemaining(endtime) {
        let f = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((f/1000) % 60),
            minutes = Math.floor((f/60000) % 60),
            hours = Math.floor(f/3600000);

        return {
            'total' : f,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let f = getTimeRemaining(endtime);
            hours.textContent = f.hours;
            minutes.textContent = f.minutes;
            seconds.textContent = f.seconds;

            if (f.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    let moreBtn = document.querySelector('.more'),
        modal = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    moreBtn.addEventListener('click', function () {
        return modal.style.display = 'block';
        this.classList.add('more-splash');
        // window.onscroll = function(){
        //     return false;
        // }
        // // document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        return modal.style.display = 'none';
        modal.classList.remove('more-splash');
        // document.body.style.overflow = '';

    })
})

