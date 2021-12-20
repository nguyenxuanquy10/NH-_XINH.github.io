var slider_big = function() {
    const slider_item = document.querySelectorAll(".bodymain5-content");
    const slider_wild = slider_item[0].offsetWidth;
    const slider_main = document.querySelector(".slider-main-main5");
    const slider_next = document.querySelector(".button-slider-big-right")
    const slider_back = document.querySelector(".button-slider-big-left")
    slider_next.addEventListener("click", function() {
        console.log("thuc thi")
        solve1(1);
    })
    slider_back.addEventListener("click", function() {
        solve1(2);
    })
    let posotiont = 0;
    let max_width = slider_wild * (slider_item.length - 2);
    const solve1 = function(arg) {
        if (arg == 1) {
            console.log(posotiont)
            if (posotiont == 0) {
                posotiont = -(max_width + slider_wild)
            }
            posotiont = posotiont + slider_wild;
            slider_main.style = `transform: translateX(${posotiont}px);`


        }
        if (arg == 2) {
            if (posotiont == -max_width) {
                posotiont = slider_wild
            }
            posotiont = posotiont - slider_wild;
            slider_main.style = `transform: translateX(${posotiont}px);`
        }

    }
}
window.addEventListener("load", slider_big());