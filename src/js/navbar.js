$(document).ready(function () {
    $('#navbar-hamburger').on('click', function () {
        const activeClass = 'anicon-active';
        const isActive = $(this).hasClass(activeClass);

        if (isActive === true) {
            $(this).removeClass(activeClass);
            $('body').css('overflow', 'visible');
            $('#mobile-navbar-container').hide(250);
        } else {
            $(this).addClass(activeClass);
            $('body').css('overflow', 'hidden');
            $('#mobile-navbar-container').show(250);
        }
    });
});