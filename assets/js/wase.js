$(document).ready(function () {
    $('.wase-menu-item').on('click', function () {
        $('.wase-menu-item').removeClass('active');
        $(this).addClass('active');
    });
});