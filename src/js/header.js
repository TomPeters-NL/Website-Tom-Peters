jQuery(function ($) {
    $('.header-navigation-link').on('mouseenter', function () {
        const selectorClass = $(this).prop('id').replace('link', 'selector');
        const selectors = $('.' + selectorClass);

        selectors.css('display', 'inline');
    });

    $('.header-navigation-link').on('mouseout', function () {
        const selectorClass = $(this).prop('id').replace('link', 'selector');
        const selectors = $('.' + selectorClass);

        selectors.css('display', 'none');
    });

    $(document).on('scroll', function () {
        const aboutMePosition = $('#about-me').position().top;
        const scrollPosition = $(this).scrollTop();
        var header = $('header');

        if (scrollPosition >= aboutMePosition) {
            header.css('height', '6vh');
        } else {
            header.css('height', '0vh');
        }
    });
});