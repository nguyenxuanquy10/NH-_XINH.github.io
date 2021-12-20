document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelectorAll('div.menu');
    var menu = menu[0];

    //Truy xuất div menu
    var trangthai = "duoi300";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        console.log(x)
        if (x > 300) {

        } else {
            if (trangthai == "tren300") {
                menu.classList.remove('menutora');
                trangthai = "duoi300";
            }
        }

    })
})