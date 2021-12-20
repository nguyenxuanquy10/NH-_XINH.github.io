// effect image
/* Demo purposes only */
// $("figure").mouseleave(
//     function() {
//         $(this).removeClass("hover");
//     }
// );
// header-scroll
document.addEventListener("DOMContentLoaded", function() {
        var menu = document.querySelectorAll('.header');
        var menu = menu[0];
        var hiden_header1 = document.querySelector('.header-top');
        console.log(hiden_header1)
        var hiden_header2 = document.querySelector('.header-bottom');
        console.log(menu)
            //Truy xuất div menu
        window.addEventListener("scroll", function() {
            var x = pageYOffset;
            console.log(x);
            if (x > 0 && x < 70) {
                hiden_header1.style.display = 'flex';
                hiden_header2.style.display = 'flex';
                menu.style = 'position:static;'
            }
            if (x >= 70 && x > 250) {
                menu.style.display = 'block';
                hiden_header1.style.display = 'none';
                hiden_header2.style.display = 'flex';

                menu.style = 'position: fixed;'
            }
            // if (x > 250) {
            //     menu.style.display = 'block';
            //     hiden_header1.style.display = 'none';
            //     hiden_header2.style.display = 'flex';
            // }
        })
    })
    // header-scroll
    // image effect
function slidermain() {
    const slider = document.querySelector('.slider');
    const slider_main = document.querySelector(".slider-main");
    const slider_item = document.querySelectorAll(".slider-item");
    const btn_next = document.querySelector(".button-right");
    const btn_back = document.querySelector(".button-left");
    const slider_item_width = slider_item[0].offsetWidth;
    console.log(slider_item_width);
    // console.log("23234");
    console.log(btn_back);
    console.log(btn_next);
    var positionX = 0;
    btn_next.addEventListener("click", function() {
        solve(1);
    });
    btn_back.addEventListener("click", function() {
        solve(2);
    });

    function solve(dir) {
        if (dir == 1) {

            if (positionX == 0) {
                positionX = -600
            }
            positionX = positionX + slider_item_width;
            //    console.log(positionX);
            slider_main.style = `transform: translateX(${1.5*positionX}px);`
        } else if (dir == 2) {
            if (positionX == -500) {
                positionX = -100
            }
            console.log(positionX)
            positionX = positionX - slider_item_width;
            slider_main.style = `transform: translateX(${1.5*positionX}px);`
        }
    }
}
// slider -big 

// slider-auto

window.addEventListener("load", slidermain());

// login
var buttonlogin = document.getElementById("buttonlogin");
console.log(buttonlogin)
buttonlogin.addEventListener("click", function() {
    // console.log(120)
    // console.log(document.querySelector(".login"))
    document.querySelector(".login").style.display = "block";

})
console.log(document.querySelector(".login-exit"));
document.querySelector(".login-exit").addEventListener("click", function() {
        console.log("click oke man")
        document.querySelector(".login").style.display = "none";
    })
    // menu
document.querySelector(".button-menu").addEventListener('click', function() {
    document.querySelector('.menu-click-backgroun').classList.remove('hidden');

    document.querySelector('.menu-click').classList.remove('hidden');
})
document.querySelector('.login-exit-menu').addEventListener('click', function() {
    document.querySelector('.menu-click-backgroun').classList.add('hidden');
    document.querySelector('.menu-click').classList.add('hidden');
})