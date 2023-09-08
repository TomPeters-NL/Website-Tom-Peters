jQuery(function ($) {
    const initialBackgroundSize = Number($('#opening').css('background-size').replace('%', ''));
    var backgroundSize = initialBackgroundSize;
    var scrollPosition = 0;

    $(document).on('scroll', function () {
        scrollPosition = $(this).scrollTop();

        backgroundSize = initialBackgroundSize + (0.05 * scrollPosition);
        if (backgroundSize <= 75) {
            $('#opening').css('background-size', backgroundSize + '%');
        }
    });
});