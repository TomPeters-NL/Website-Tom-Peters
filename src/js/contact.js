$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/php/sendEmail.php',
            data: {
                name: this.name.value,
                contact: this.contact.value,
                message: this.message.value
            },
            success: function () {
                $('#contact-form').fadeOut(250, function () {
                    $('#contact-success').fadeIn(250);
                });
            },
            error: function () {
                $('#contact-error').animate({bottom: 0}, 500);
            }
        });
    });

    $('#contact-error-close').on('click', function () {
        $('#contact-error').animate({bottom: '-10vh'}, 500);
    });
});