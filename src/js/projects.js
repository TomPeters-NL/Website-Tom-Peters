jQuery(function ($) {
    $('.collapsible').on('click', function () {
        const collapsibleIcon = $(this).children('img').eq(0);
        const links = $('#' + $(this).prop('id').replace('button', 'list'));

        if (collapsibleIcon.hasClass('rotate') === true) {
            collapsibleIcon.removeClass('rotate')
        } else {
            collapsibleIcon.addClass('rotate')
        }

        links.toggle('fast', 'swing');
    });
});