/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    // if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
        $('#imageResult')
            .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);

    /*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
    var input = document.getElementById('upload');
    var infoArea = document.getElementById('upload-label');


    var infoArea = document.getElementById('upload-label');
    infoArea.textContent = 'File name: ' + input.files[0].name;
    // }
}

$(function () {
    $('#upload').on('change', function (e) {
        readURL(e.target);

    });

});




// Fixed Navbar on scroll
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#navbar_top').addClass("fixed-top");

            $('.fixed-top').css("background-color", "#7B859F");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");

            $('nav').css("background", "transparent");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}