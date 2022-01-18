$(function() {
    $('.button').button();
    $('#id_q').autocomplete({
        source: "/ts/",
        minLength: 3,
        select: function( event, ui ) {
            event.preventDefault();
            document.location = '/topic/' + ui.item.value + '/';
            $('#id_q').value = ui.item.label;
        }
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
});


function log( message ) {
    console.log(message);
}

